import { NavLink } from "react-router-dom";

const CourseRow = (props) => {
  const data = props.data;
  console.log(data);

  const tableHeader = (
    <tr>
      <th
        scope="col"
        className="px-6 py-3 text-left text-gray-500 uppercase tracking-wider"
      >
        <div className="text-sm">Title</div>
        <div className="text-xs font-thin">Course Code</div>
      </th>

      <th
        scope="col"
        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
      >
        Course Status
      </th>

      <th
        scope="col"
        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
      />
    </tr>
  );
  const courseRows = data.map((row, index) => (
    <tr
      key={data.unique_record_identifier}
      className={
        index % 2 === 0
          ? "bg-gray-50 hover:shadow-sm"
          : "bg-white hover:shadow-lg"
      }
    >
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
        <NavLink to="#" className="text-blue hover:text-blue-light">
          View
        </NavLink>
      </td>
    </tr>
  ));

  return (
    <div className="p-2 rounded-lg align-middle min-w-full overflow-auto mx-auto">
      <div className="shadow overflow-hidden border-b rounded-lg">
        <table className="min-w-full divide-y divide-black table-auto">
          <thead className="bg-gray-50">{tableHeader}</thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {courseRows}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default CourseRow;
