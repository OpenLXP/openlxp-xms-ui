import CourseListHeader from "../CourseHeader/CourseListHeader";
import CourseRow from "../CourseRow/CourseRow";

const CourseList = (props) => {
  const courses = props.data || [];

  // Creates the individual rows of the table.
  const rows = courses.map((row, index) => {
    if (Object.keys(row).length > 0)
      return <CourseRow data={row} rowIndex={index} key={index} />;
    return null;
  });

  return (
    <table
      className="min-w-full divide-y divide-black table-auto"
      data-testid="course-table">
      <thead>
        <CourseListHeader />
      </thead>
      <tbody data-testid="course-rows">{rows}</tbody>
    </table>
  );
};
export default CourseList;
