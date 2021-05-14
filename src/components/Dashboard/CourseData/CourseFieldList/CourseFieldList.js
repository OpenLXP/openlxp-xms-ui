import CourseField from "../CourseField/CourseField";

// Handles the logic of rendering the course field data.
const CourseFieldList = (props) => {
  const data = props.data || {};
  const skipData = props.dataToSkip || [];

  const fields = Object.keys(data).map((key) => {
    // if the data is specified the data will not be rendered in the list.
    if (skipData.includes(key)) return null;

    // Default returns a course field.
    return <CourseField data={data[key]} label={key} key={key} />;
  });

  return (
    <div className="mx-auto border-t border-gray-200 p-10" data-testid="course-field-list">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-8">
        {fields}
      </div>
    </div>
  );
};
export default CourseFieldList;
