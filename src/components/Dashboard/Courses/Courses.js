import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import CourseRow from "./CourseRow/CourseRow";

const Courses = (props) => {
  // Default state of the course data.
  const [courseData, setCourseData] = useState({
    courses: null,
    isLoading: false,
    error: null,
  });

  // Gets the data passed from the catalog click event
  const location = useLocation();
  const catalogTitle = location.state;

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
      })
      .catch((err) => {
        setCourseData({
          courses: null,
          isLoading: false,
          error: err,
        });
      });
  }, [catalog_courses_api_url]);

  let content = null;

  if (courseData.isLoading) {
    content = <div>Loading...</div>;
  } else if (courseData.courses && !courseData.isLoading) {
    content = <CourseRow data={courseData.courses} />;
  } else {
    content = (
      <div>Error loading courses. Please contatc an administrator.</div>
    );
  }

  return <div>{content}</div>;
};
export default Courses;
