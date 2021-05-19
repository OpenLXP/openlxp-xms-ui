import { useLocation } from "react-router";
import { flattenObject } from "../../../utils/flattenDataObjectUtils";
import CourseFieldList from "./CourseFieldList/CourseFieldList";
import CourseHeader from "./CourseHeader/CourseHeader";

const CourseData = (props) => {
  // Gets the location data for state
  const location = useLocation();
  const courseData = location.state;

  // Main Title information
  const courseTitle = courseData.metadata.Course.CourseTitle;

  // Uses the utility function from utils.
  const flattenedData = flattenObject(courseData);

  return (
    <div className="bg-white shadow overflow-hidden rounded-md">
      <CourseHeader title={courseTitle} status={courseData.record_status} />
      <CourseFieldList data={flattenedData} />
    </div>
  );
};
export default CourseData;
