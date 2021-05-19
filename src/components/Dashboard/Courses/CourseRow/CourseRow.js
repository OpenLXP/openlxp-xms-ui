import { NavLink } from "react-router-dom";

const CourseRow = (props) => {
  const data = props.data || undefined;
  const index = props.rowIndex || 0;

  if (data) {
    return (
      <tr
        key={data.unique_record_identifier}
        className={
          index % 2 === 0
            ? "bg-gray-50 hover:shadow-sm"
            : "bg-white hover:shadow-lg"
        }>
        <td className="px-6 py-4 text-sm text-gray-900">
          <div className="font-medium">{data.metadata.Course.CourseTitle}</div>
          <div className="font-light">CC: {data.unique_record_identifier}</div>
        </td>

        <td
          className="px-6 py-4 text-sm text-gray-500 text-center"
          aria-label="Course Status">
          <span className="px-2 inline-flex text-xs  leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            {data.record_status}
          </span>
        </td>

        <td
          className="px-6 py-4  text-center text-sm font-medium"
          aria-label={`View more about this course ${data.unique_record_identifier}`}>
          <NavLink
            aria-label={`View more about this course ${data.unique_record_identifier}`}
            to=
            {{
              pathname: `/dashboard/${data.provider_name}/course/${data.unique_record_identifier}`,
              state: data,
            }}
            className="text-blue hover:text-blue-light"> View
          </NavLink>
        </td>
      </tr>
    );
  }

  // Returns nothing if there is no data.
  return null;
};

export default CourseRow;
