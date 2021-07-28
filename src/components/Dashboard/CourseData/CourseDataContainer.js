import { Fragment, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";

import CourseField from "./CourseField/CourseField";
import CourseHeader from "./CourseHeader/CourseHeader";

const CourseData = (props) => {
  const history = useHistory();
  const { id } = useParams();

  const [courseState, setCourseState] = useState({
    course: null,
    isLoading: false,
    error: null,
  });

  const [modalContent, setModalContent] = useState({
    success: false,
    isLoading: false,
    error: null,
    content: null,
  });

  // to track state of the modal
  const [modalState, setModalState] = useState({
    isOpen: false,
  });

  // to track state of the PATCH call when submitting course data
  const [postCourseState, setPostCourseState] = useState({
    success: false,
    isLoading: false,
    error: null,
  });
  const [isEditing, setEditing] = useState(false);

  // state of the prepared data.
  const [preparedData, setPreparedData] = useState({});

  // Main Title information
  let courseTitle = null;
  let courseContent = null;

  /* Whenever the component first renders, we make an API call to find courses
        using the keyword in the url */
  useEffect(() => {
    let isSubscribed = true;

    let url = process.env.REACT_APP_XIS_COMPOSITELEDGER_API + id;

    if (isSubscribed) {
      setCourseState((previousState) => {
        const resultState = {
          course: null,
          isLoading: true,
          error: null,
        };
        return resultState;
      });
      axios
        .get(url)
        .then((response) => {
          setCourseState((previousState) => {
            return {
              course: response.data,
              isLoading: false,
              error: null,
            };
          });
          setPreparedData(prepareDataForDisplay(response.data));
        })
        .catch((err) => {
          setCourseState((previousState) => {
            return {
              course: null,
              isLoading: false,
              error: err,
            };
          });
        });
    }
    return () => {
      isSubscribed = false;
    };
  }, [id]);

  // updates the data for submission
  function updateData(data, keys, value) {
    // copy the list of keys
    const keyList = [...keys];
    // grab the first key in the array
    const current = keyList.shift();

    // if there are no more keys
    if (!current) return value;

    // update the key with the reuturned value
    data[current] = updateData(data[current], keyList, value);
    return data;
  }

  // prepares the data for display
  function prepareDataForDisplay(data) {
    // the initial starting point
    let path = ["metadata", "Metadata_Ledger"];

    // list of sections
    let sections = {};

    // initial starting point
    let metadata = data.metadata.Metadata_Ledger;
    Object.keys(metadata).forEach((key) => {
      // the current object.
      const obj = metadata[key];

      // the initial object to represent the data.
      let section = {
        title: key,
        data: {},
      };
      


      // add the key to the path
      path.push(key);

      Object.keys(obj).forEach((attribute) => {
        const attributeValue = obj[attribute];

        const strKeyPath = `${path.join(".")}.${attribute}`;

        // populate the data
        section.data[strKeyPath] = {
          pathToData: strKeyPath,
          value: attributeValue,
        };
      });

      // add the section to the list of of sections
      sections[key] = section;

      // reset the path
      path = ["metadata", "Metadata_Ledger"];
    });

    // return the populated sections
    return sections;
  }

  function prepareDataForSubmit() {
    let data = { ...courseState.course };
    let toRestore = [];
    // Turning the data into a 1D Array
    Object.keys(preparedData).forEach((sectionKey) => {
      Object.keys(preparedData[sectionKey].data).forEach((attributeKey) => {
        toRestore.push(preparedData[sectionKey].data[attributeKey]);
      });
    });

    toRestore.forEach((obj) => {
      data = updateData(data, obj.pathToData.split("."), obj.value);
    });

    // TODO: Remove this and add action
    return data;
  }

  // update the value of the data
  function updatePreparedDataValue(value, strKeyPath) {
    // grabs the section key
    const sectionName = strKeyPath.split(".")[2];

    // grabs the section data
    let section = preparedData[sectionName];

    // updates the key value pair to be the new value
    section.data[strKeyPath].value = value;

    let currentData = { ...preparedData };
    currentData[sectionName] = section;

    setPreparedData(currentData);
  }

  // Updates the specific value being edited
  const handleEdit = (event, pathToData) => {
    updatePreparedDataValue(event.target.value, pathToData);
  };

  const handleSubmit = (event) => {
    if (isEditing) {
      let data = prepareDataForSubmit();
      let url = process.env.REACT_APP_XIS_COMPOSITELEDGER_API + id + "/";
      openModal();
      setModalContent({
        success: null,
        isLoading: true,
        error: null,
        content: <div>...Loading</div>,
      });
      axios
        .patch(url, data)
        .then((response) => {
          setModalContent({
            success: true,
            isLoading: false,
            error: null,
            content: (
              <div className="text-green-600">
                Course metadata successfully updated
              </div>
            ),
          });
        })
        .catch((err) => {
          setModalContent({
            success: null,
            isLoading: true,
            error: true,
            content: (
              <div className="text-red-600">
                Error Submitting metadata edits. Please contact an administrator
              </div>
            ),
          });
        });
    }
    setEditing(!isEditing);
  };

  // handles closing the modal
  const closeModal = () => {
    setModalState({ isOpen: false });
  };

  // handles opening the modal
  const openModal = () => {
    setModalState({ isOpen: true });
  };

  // creates the html to render
  const renderSections = Object.keys(preparedData).map((sectionKey) => {
    // Each sections data
    const sectionData = preparedData[sectionKey].data;
    return (
      <div className="px-4 " key={sectionKey}>
        <div className="font-semibold text-2xl">{sectionKey}</div>
        <div className="">
          {Object.keys(sectionData).map((key) => {
            return (
              <div className="flex flex-col my-3" key={sectionKey + "_" + key}>
                <label className="relative inline-flex max-w-max items-center space-x-2 px-4 py-2 border-gray-300 text-sm font-medium rounded-t-md text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 select-none">
                  {sectionData[key].pathToData.split(".")[3]}
                </label>
                <textarea
                  disabled={!isEditing}
                  onChange={(event) =>
                    handleEdit(event, sectionData[key].pathToData)
                  }
                  rows={Math.floor(sectionData[key].value.length / 50) - 1 || 1}
                  type="text"
                  placeholder={sectionData[key].value}
                  className="w-full relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-b-md rounded-tr-md hover:bg-blue-light hover:bg-opacity-5 focus:outline-none focus:ring-1 focus:ring--blue-light focus:border-blue-light focus:shadow-md text-gray-400 focus:text-gray-700"
                  onFocus={(event) => {
                    event.target.value = sectionData[key].value
                      .toString()
                      .trim();
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  // handles page display depending on courseState
  if (courseState.course && !courseState.isLoading) {
    courseTitle =
      courseState.course.metadata.Metadata_Ledger.Course.CourseTitle;
    courseContent = (
      <>
        <CourseHeader
          title={courseTitle}
          status={courseState.course.record_status}
        />
        <div className="flex flex-row justify-end px-4">
          <div
            className="px-3 py-1 border rounded-md hover:bg-blue-light hover:text-white cursor-pointer select-none"
            onClick={(event) => handleSubmit()}
          >
            {isEditing ? "Update" : "Edit"}
          </div>
        </div>
        <div>{renderSections}</div>
      </>
    );
  } else if (courseState.isLoading) {
    courseContent = <div>Loading...</div>;
  } else if (!courseState.isLoading && courseState.error) {
    courseContent = (
      <div>Error Loading course. Please contact an administrator.</div>
    );
  }

  return (
    <div className="bg-white shadow overflow-hidden rounded-md pb-8">
      {courseContent}
      <Transition appear show={modalState.isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Edit Metadata
                </Dialog.Title>
                <div className="mt-2">
                  <div className="text-sm">{modalContent.content}</div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Done
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
export default CourseData;
