import React, { useState, useEffect } from "react";
import axios from 'axios';

import classes from "./Courses.module.css";
import testData from "../../resources/testData/test_one.json";

const Courses = (props) => {

  // Initial state for tracking catalogs
  const [coursesState, setCoursesState] = useState({
    courses: null,
    isLoading: false,
    error: null
  });

  const catalog_courses_api_url = process.env
    .REACT_APP_XIS_COMPOSITELEDGER_API + "?provider=dau";

  let result = (
    <div>
      Error Loading experiences. Please contact an administrator.
    </div>
  )

  /* Whenever the component first renders, make an API call to find providers
        using the keyword in the url */
  useEffect(() => {
    let url = catalog_courses_api_url;
    setCoursesState(previousState => {
      const resultState = {
        courses: null,
        isLoading: true,
        error: null
      }
      return resultState
    });
    axios.get(url)
      .then(response => {
        setCoursesState(previousState => {
          return {
            courses: response.data,
            isLoading: false,
            error: null
          }
        });
      })
      .catch(err => {
        setCoursesState(previousState => {
          return {
            courses: null,
            isLoading: false,
            error: err
          }
        })
      });
  }, []);

  const rows = [
    {
      CourseCode: 1,
      CourseTitle: "Title",
      record_status: "Active",
      assigned_to: "Me",
      date_assigned: "4/23/2021",
    },
    {
      CourseCode: 2,
      CourseTitle: "Title",
      record_status: "Active",
      assigned_to: "Me",
      date_assigned: "4/23/2021",
    },
    {
      CourseCode: 3,
      CourseTitle: "Title",
      record_status: "Active",
      assigned_to: "Me",
      date_assigned: "4/23/2021",
    },
    {
      CourseCode: 4,
      CourseTitle: "Title",
      record_status: "Active",
      assigned_to: "Me",
      date_assigned: "4/23/2021",
    },
  ];

  return (
    <div>
      <div>
        <div className={classes.title}>Courses</div>
        <div>
          <h2 className={classes.text}>{rows.length} Courses in Catalog</h2>
          <table id="myTable">
            <tr className={classes.heading}>
              <th>Course ID</th>
              <th>Course Name</th>
              <th>Course Manager</th>
              <th>Date Updated</th>
              <th>Record Status</th>
              <th>Assigned To</th>
              <th>Date Assigned</th>
            </tr>
            {rows.map((row) => (
              <tr
                key={row.CourseCode}
                onClick={() =>
                  props.history.push({
                    pathname: "/course",
                    state: testData ,
                  })
                }
              >
                <td>{row.CourseCode}</td>
                <td>{row.CourseTitle}</td>
                <td>{row.CourseManager}</td>
                <td>{row.date_updated}</td>
                <td>{row.record_status}</td>
                <td>{row.assigned_to}</td>
                <td>{row.date_assigned}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Courses;
