'use strict';

import CourseListHeader from "../CourseHeader/CourseListHeader";
import { useHistory } from "react-router-dom";
import Link from 'next/link';

const CourseList = (props) => {
  const history = useHistory();

  const courses = props.data?.experiences.results || [];
  // Creates the individual rows of the table.
  const rows = courses?.map((data, index) => {
    if (Object.keys(data).length > 0)
      return  (
      <tr key={data.metadata_key_hash}
       className='group cursor-pointer hover:shadow-lg pr-2 pl-1 py-1 rounded-md outline-none' 
       onClick={() => history.push(`/dashboard/${data.provider_name}/course/${data.metadata_key_hash}`)} >
        <td className="px-6 py-4 text-sm text-gray-900">
           <div className="font-medium">
             {data.metadata?.Course?.CourseTitle}
           </div>
           <div className="font-light">
             {data.metadata?.Course?.CourseCode}
           </div>
         </td>

         <td className="px-6 py-4  text-center text-sm font-medium"
           aria-label={`View more about this course ${data.metadata_key_hash}`}
         >
           <Link
             aria-label={`View more about this course ${data.metadata_key_hash}`}
            //  to={{
            //    pathname: `/dashboard/${data.provider_name}/course/${data.metadata_key_hash}`,
            //   //  state: data,
            //  }}
             href={`/dashboard/${data.provider_name}/course/${data.metadata_key_hash}`} 
             className="text-blue hover:text-blue-light"
           >
             View
           </Link>
         </td>
      </tr>)
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
