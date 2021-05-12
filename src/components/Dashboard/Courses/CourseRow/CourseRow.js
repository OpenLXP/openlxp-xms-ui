import { NavLink } from "react-router-dom";

const CourseRow = (props) => {
  const data = props.data || [];

  const courseRows = data.map((row, index) => (
    <tr
      key={data.unique_record_identifier}
      className={
        index % 2 === 0
          ? "bg-gray-50 hover:shadow-sm"
          : "bg-white hover:shadow-lg"
      }>
      <td className="px-6 py-4 text-sm text-gray-900">
        <div className="font-medium">{row.metadata.Course.CourseTitle}</div>
        <div className="font-light">CC: {row.unique_record_identifier}</div>
      </td>

      <td className="px-6 py-4 text-sm text-gray-500 text-center">
        <span className="px-2 inline-flex text-xs  leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {row.record_status}
        </span>
      </td>

      <td className="px-6 py-4  text-center text-sm font-medium">
        <NavLink
          to={{ pathname: "/dashboard/course", state: row }}
          className="text-blue hover:text-blue-light">
          View
        </NavLink>
      </td>
    </tr>
  ));

  return <tbody data-testid="courses-table">{courseRows}</tbody>;
};

export default CourseRow;
