import { data } from "autoprefixer";
import { useLocation } from "react-router";

const CourseData = (props) => {
  // Gets the location data for state
  const location = useLocation();
  const courseData = location.state;

  // Main Title information
  const courseTitle = courseData.metadata.Course.CourseTitle;
  const courseProvider = courseData.metadata.Course.CourseProviderName;
  const courseCode = courseData.unique_record_identifier;

  // To flatten data in a non specific way with a amortorized runtime of O(n)
  const flattenDataObj = (objectToIterateOver, objectToRender) => {
    // If there is nothing left to iterate over return
    if (!objectToIterateOver) return;

    // List of object keys
    const objKey = Object.keys(objectToIterateOver);

    // For each key in the list
    objKey.forEach((key) => {
      const currentData = objectToIterateOver[key];

      // If the key is undefined.
      if (!currentData) {
        objectToRender[key] = "";
      }

      // If the data is a string add that to the objectToRender
      if (typeof currentData === "string") {
        objectToRender[key] = currentData;
        return;
      }

      // If the data is an object (Inception) recurse and pass the objectToRender down a level
      flattenDataObj(currentData, objectToRender);
    });

    // Finally return the object to render
    return objectToRender;
  };

  const flattendData = flattenDataObj(courseData, {});

  const alreadyRendered = [
    "CourseTitle",
    "CourseProviderName",
    "unique_record_identifier",
  ];
  const dataFields = Object.keys(flattendData).map((key) => {
    // List of fields that have already been rendered
    if (alreadyRendered.includes(key)) return null;
    return (
      <div className="sm:col-span-1">
        <dt className="text-sm font-medium text-gray-500">{key}</dt>
        <input
          className="mt-1 text-sm text-gray-900"
          placeholder={flattendData[key] || "undefined"}
        />
      </div>
    );
  });

  return (
    <div className="bg-white shadow overflow-hidden rounded-md">
      <div className="p-10">
        <h3 className="text-xl mb-3 leading-6 font-medium text-gray-900">
          <div className="flex flex-wrap-reverse flex-row gap-3">
            {courseTitle}
            <span className="px-2 inline-flex text-xs leading-5 self-center font-semibold rounded-full bg-green-100 text-green-800">
              {courseData.record_status}
            </span>
          </div>
        </h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 gap-x-4 gap-y-8 ">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Course Code</dt>
            <dd className="mt-1 text-sm text-gray-900">{courseCode}</dd>
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Course Provider
            </dt>
            <dd className="mt-1 text-sm text-gray-900">{courseProvider}</dd>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 px-10 py-5 mx-2" />
      <div className="px-10 pb-5 mx-2">
        <div className="grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 gap-x-4 gap-y-8">
          {dataFields}
        </div>
        <div className="mt-8">
          <dt className="text-sm font-medium text-gray-500">About</dt>
          <dd className="mt-1 text-sm text-gray-900">
            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
            incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
            consequat sint. Sit id mollit nulla mollit nostrud in ea officia
            proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit
            deserunt qui eu.
          </dd>
        </div>
      </div>
    </div>
  );
};
export default CourseData;
