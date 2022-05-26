import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import CourseList from "./CourseList/CourseList";
import { catalog_courses_url } from "../../../config/endpoints";
import { axiosInstance } from "../../../config/axiosInstance";


const Courses = (props) => {
  // Default state of the course data.
  const [courseData, setCourseData] = useState({
    courses: null,
    isLoading: false,
    error: null,
  });

  const [coursesToShow, setCoursesToShow] = useState(null);

  // Gets the data passed from the catalog click event
  const location = useLocation();
  const catalogTitle = location.state;

  // helper method for comparing length
  const isTooLong = (length, data) => {
    return length <= data?.length;
  };

  // helper method for matching strings
  const isMatch = (query, str) => {
    return str.indexOf(query) !== -1;
  };

  const sortCourses = (event) => {
    let query = event.target.value;

    // if there is something to search
    if (query !== "" && coursesToShow) {
      // prepare the data to be found
      const queryLen = query.length;
      
      const newCourseList = courseData.courses.filter((course) => {
        const { Course } = { ...course.metadata.Metadata_Ledger };
        if (
          isTooLong(queryLen, Course?.CourseTitle) &&
          isMatch(query, Course?.CourseTitle)
        ) {
          return course;
        } else if (
          isTooLong(queryLen, Course?.CourseShortDescription) &&
          isMatch(query, Course?.CourseShortDescription)
        ) {
          return course;
        } else if (
          isTooLong(queryLen, Course?.CourseType) &&
          isMatch(query, Course?.CourseType)
        ) {
          return course;
        } else if (
          isTooLong(queryLen, Course?.CourseCode) &&
          isMatch(query, Course?.CourseCode)
        ) {
          return course;
        }
      });

      // setting the new data to show
      return setCoursesToShow(newCourseList);
    }
    return setCoursesToShow(courseData.courses);
  };

  useEffect(() => {
    console.log(coursesToShow)
  }, [coursesToShow]);

  // Building the api call based on the catalog clicked
  const catalog_courses_api_url = catalog_courses_url + `${catalogTitle}`;
  useEffect(() => {
    setCourseData({ courses: null, isLoading: true, error: null });
    axiosInstance.get(catalog_courses_api_url)
      .then((response) => {
        setCourseData({
          courses: response.data.experiences,
          isLoading: false,
          error: null,
        });
        setCoursesToShow(response.data);
      })
      .catch((error) => {
        setCourseData({
          courses: null,
          isLoading: false,
          error: error,
        });
        console.log(error);
      });
  }, []);

  const table = useMemo(() => {
    if (courseData.isLoading) {
      return <div>Loading...</div>;
    } else if (courseData.courses && !courseData.isLoading) {
      return <CourseList data={coursesToShow} />;
    } else {
      return <div>Error loading courses. Please contact an administrator.</div>;
    }
  },[coursesToShow]);

  return (
    <div className="rounded-lg align-middle min-w-full overflow-auto mx-auto">
      <h2 className="text-2xl my-8">Course List</h2>
      {!courseData.isLoading && !courseData.error && (
        <div className={"rounded-md shadow w-1/2 my-5 ml-0.5"}>
          <div className="flex flex-row bg-white justify-between pl-2 pr-3 py-2 focus-within:ring-blue-light focus-within:ring-2 rounded-md">
            <input
              type={"text"}
              className={"w-full bg-transparent px-2 py-1 outline-none"}
              placeholder={"Search"}
              onChange={(event) => sortCourses(event)}
            />
            <div className={"flex justify-center items-center"}>
              <ion-icon name="search-outline" />
            </div>
          </div>
        </div>
      )}
      <div className="shadow overflow-hidden border-b rounded-lg">{table}
      </div>
    </div>
  );
};
export default Courses;
