import React, { useState } from "react";
import classes from "./Courses.module.css";

const Courses = (props) => {
  
  const rows= [
    {
      CourseCode:1, 
      CourseTitle:'Title', 
      record_status:'Active', 
      assigned_to:"Me", 
      date_assigned: "4/23/2021"
    },
    {
      CourseCode:2, 
      CourseTitle:'Title', 
      record_status:'Active', 
      assigned_to:"Me", 
      date_assigned: "4/23/2021"
    },
    {
      CourseCode:3, 
      CourseTitle:'Title', 
      record_status:'Active', 
      assigned_to:"Me", 
      date_assigned: "4/23/2021"
    },
    {
      CourseCode:4, 
      CourseTitle:'Title', 
      record_status:'Active', 
      assigned_to:"Me", 
      date_assigned: "4/23/2021"
    },
  ];

  return (
    <div>
      <div >
        <div className={classes.title}>Courses</div>
          <div>
            <h2 className={classes.text}>{rows.length} Courses in Catalog</h2>
            <table id="myTable">
                <tr className={classes.heading}>
                  <th>Course Id</th>
                  <th>Course Name</th>
                  <th>Course Manager</th>
                  <th>Date Updated</th>
                  <th>Record Status</th>
                  <th>Assigned To</th>
                  <th>Date Assigned</th>
                </tr>
              {rows.map(row => (
                <tr key={row.id}>
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
