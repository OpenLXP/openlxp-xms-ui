import { useLocation } from "react-router-dom";
import React from "react";
import classes from "./Course.module.css";

const Course = (props) => {
  let location = useLocation();
  const courseData = location.state;
  const CourseTitle = courseData.metadata.CourseTitle;
  
  // Preparing the data to be displayed
  // CourseTitle = CourseTitle.split("|")[1].trim();
  console.log(courseData.metadata)

  return (
    <>
      <h2>{CourseTitle}</h2>
      <div>
        {Object.keys(courseData.metadata).map((key, index) => {
          let currObj = courseData.metadata[key];
          let fields = (
            Object.keys(currObj).map((field, idx) => {
              if (field.toLowerCase().includes('date')) {
                return (
                  <React.Fragment key={field}>
                    <label>{field}:&nbsp;</label>
                    <input placeholder={Date(currObj[field]).toString()} />
                  </React.Fragment>
                )
              } else if (field.toLowerCase().includes('description')) {
                return (
                  <React.Fragment key={idx}>
                    <label>{field}:&nbsp;</label>
                    <textarea placeholder={currObj[field]}></textarea>
                  </React.Fragment>
                )
              } else {
                return (
                  <React.Fragment key={idx}>
                    <label>{field}:&nbsp;</label>
                    <input placeholder={currObj[field]} />
                  </React.Fragment>
                )

              }
            })
          );
          return (
            <React.Fragment key={index} >
              <div className={classes.container}>
                <h3>{key}</h3>
              </div>
              <div className={classes.grid}>
                {fields}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Course;
