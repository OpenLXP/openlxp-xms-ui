import CourseListHeader from "../CourseHeader/CourseListHeader";
import CourseRow from "../CourseRow/CourseRow";
import { NavLink } from "react-router-dom";

const CourseList = (props) => {
  const courses = props.data?.experiences || [];
  console.log("course",courses);
  // Creates the individual rows of the table.
  const rows = courses?.map((data, index) => {
    console.log(data.metadata_key_hash);
    if (Object.keys(data).length > 0)
      return  (
      <tr key={data.metadata_key_hash}>
        <td className="px-6 py-4 text-sm text-gray-900">
           <div className="font-medium">
             {data.metadata?.Metadata_Ledger?.Course?.CourseTitle}
           </div>
           <div className="font-light">
             {data.metadata?.Metadata_Ledger?.Course?.CourseCode}
           </div>
         </td>

         <td className="px-6 py-4  text-center text-sm font-medium"
           aria-label={`View more about this course ${data.metadata_key_hash}`}
         >
           <NavLink
             aria-label={`View more about this course ${data.metadata_key_hash}`}
             to={{
               pathname: `/dashboard/${data.provider_name}/course/${data.metadata_key_hash}`,
              //  state: data,
             }}
             className="text-blue hover:text-blue-light"
           >
             View
           </NavLink>
         </td>
      </tr>)

    // return <CourseRow data={row} rowIndex={index} key={index} />;
    // return <div>
    //   <pre>{JSON.stringify(row,null,2)}</pre>
    //   </div>;
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
