import { useState, useEffect } from "react";
import { useLocation } from "react-router";

import CourseField from "./CourseField/CourseField";
import CourseHeader from "./CourseHeader/CourseHeader";

const CourseData = (props) => {
  // Gets the location data for state
  const location = useLocation();
  const [courseData, setCourseData] = useState(location.state);

  // state of the prepared data.
  const [preparedData, setPreparedData] = useState({});

  // Main Title information
  const courseTitle = courseData.metadata.Course.CourseTitle;

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
  function prepareDataForDisplay() {
    // the initial starting point
    let path = ["metadata"];

    // list of sections
    let sections = {};

    // initial starting point
    let metadata = courseData.metadata;
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
      path = ["metadata"];
    });

    // return the populated sections
    return sections;
  }

  function prepareDataForSubmit() {
    let data = { ...courseData };
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
    const sectionName = strKeyPath.split(".")[1];

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

  const handleSubmit = () => {
    setCourseData(prepareDataForSubmit());
  };

  // creates the html to render
  const renderSections = Object.keys(preparedData).map((sectionKey) => {
    // Each sections data
    const sectionData = preparedData[sectionKey].data;
    return (
      <div>
        <div className="font-semibold text-2xl">{sectionKey}</div>
        <div>
          {Object.keys(sectionData).map((key) => {
            return (
              <div className="flex flex-row">
                <label className="py-2 pr-2">
                  {sectionData[key].pathToData.split(".")[2]}:
                </label>
                <input
                  onChange={(event) =>
                    handleEdit(event, sectionData[key].pathToData)
                  }
                  type="text"
                  placeholder={sectionData[key].value}
                  className="w-full"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  const prepareDataForAPI = () => {};

  // on mount
  useEffect(() => {
    setPreparedData(prepareDataForDisplay());
  }, [courseData]);

  return (
    <div className="bg-white shadow overflow-hidden rounded-md">
      <CourseHeader title={courseTitle} status={courseData.record_status} />
      <div
        className="h-24 w-36 bg-blue-500"
        onClick={() => {
          handleSubmit();
        }}
      ></div>
      <div>{renderSections}</div>
    </div>
  );
};
export default CourseData;
