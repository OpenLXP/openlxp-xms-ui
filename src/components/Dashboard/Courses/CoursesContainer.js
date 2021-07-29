import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import CourseList from "./CourseList/CourseList";

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
    return length <= data.length;
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
          isTooLong(queryLen, Course.CourseTitle) &&
          isMatch(query, Course.CourseTitle)
        ) {
          return course;
        } else if (
          isTooLong(queryLen, Course.CourseShortDescription) &&
          isMatch(query, Course.CourseShortDescription)
        ) {
          return course;
        } else if (
          isTooLong(queryLen, Course.CourseType) &&
          isMatch(query, Course.CourseType)
        ) {
          return course;
        } else if (
          isTooLong(queryLen, Course.CourseCode) &&
          isMatch(query, Course.CourseCode)
        ) {
          return course;
        }
      });

      // setting the new data to show
      return setCoursesToShow(newCourseList);
    }
    return setCoursesToShow(courseData.courses);
  };

  // Building the api call based on the catalog clicked
  const catalog_courses_api_url =
    process.env.REACT_APP_XIS_COMPOSITELEDGER_API + `?provider=${catalogTitle}`;

  useEffect(() => {
    // Sets the state to loading
    setCourseData({ courses: null, isLoading: true, error: null });

    // Requesting the catalog of courses
    axios
      .get(catalog_courses_api_url)
      .then((resp) => {
        setCourseData({
          courses: resp.data,
          isLoading: false,
          error: null,
        });
        setCoursesToShow(resp.data);
      })
      .catch((err) => {
        setCourseData({
          courses: null,
          isLoading: false,
          error: err,
        });
        setCoursesToShow(null);
      });
  }, [catalog_courses_api_url]);

  let table;

  if (courseData.isLoading) {
    table = <div>Loading...</div>;
  } else if (courseData.courses && !courseData.isLoading) {
    table = <CourseList data={coursesToShow} />;
  } else {
    table = <div>Error loading courses. Please contact an administrator.</div>;
  }

  return (
    <div className="rounded-lg align-middle min-w-full overflow-auto mx-auto">
      <h2 className="text-2xl my-8">Course List</h2>
      <div className={"rounded-md shadow w-1/2 my-5 ml-0.5"}>
        <div className="flex flex-row bg-white justify-between px-2 focus-within:ring-blue-light focus-within:ring-2 rounded-md">
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
      <div className="shadow overflow-hidden border-b rounded-lg">{table}</div>
    </div>
  );
};
export default Courses;
