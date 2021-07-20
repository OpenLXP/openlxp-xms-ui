import { useState, useEffect } from "react";
import { useLocation, useParams, useHistory } from "react-router";
import axios from "axios";

import CourseField from "./CourseField/CourseField";
import CourseHeader from "./CourseHeader/CourseHeader";

const CourseData = (props) => {
  // Gets the location data for state
  const location = useLocation();
  let { id } = useParams();
  const history = useHistory();

  const [courseState, setCourseState] = useState({
    course: null,
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
    let url = process.env.REACT_APP_XIS_COMPOSITELEDGER_API + id;

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
        console.log(err);
        setCourseState((previousState) => {
          return {
            course: null,
            isLoading: false,
            error: err,
          };
        });
      });
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
    console.log(sections);

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
    console.log(data);
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
      // setCourseState({
      //   course: data,
      //   isLoading: false,
      //   error: null,
      // });
      // API call
      axios.patch(url, data)
        .then((response) => {
          history.go(0)
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setEditing(!isEditing);
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
              <div className="flex flex-col my-3" key={sectionKey + '_' + key}>
                <label className="relative inline-flex max-w-max items-center space-x-2 px-4 py-2 border-gray-300 text-sm font-medium rounded-t-md text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 select-none">
                  {sectionData[key].pathToData.split(".")[3]}
                </label>
                <textarea
                  disabled={!isEditing}
                  onChange={(event) =>
                    handleEdit(event, sectionData[key].pathToData)
                  }
                  rows={Math.max(
                    Math.floor(sectionData[key].value.length / 50) - 1,
                    1
                  )}
                  type="text"
                  placeholder={sectionData[key].value.toString().trim()}
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

  if (courseState.course && !courseState.isLoading) {
    courseTitle = courseState.course.metadata.Metadata_Ledger.Course.CourseTitle;
    courseContent = (
      <>
        <CourseHeader title={courseTitle} status={courseState.course.record_status} />
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
    )
  } else if (courseState.isLoading) {
    courseContent = (
      <div>
        Loading...
      </div>
    )
  } else if (!courseState.isLoading && courseState.error) {
    courseContent = (
      <div>
        Error Loading course. Please Contact an administrator.
      </div>
    )
  }

const prepareDataForAPI = () => { };

return (
  <div className="bg-white shadow overflow-hidden rounded-md pb-8">
    {courseContent}
  </div>
);
};
export default CourseData;
