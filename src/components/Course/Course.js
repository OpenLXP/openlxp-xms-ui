import { useLocation } from "react-router-dom";
import React from "react";
import classes from "./Course.module.css";

const Course = (props) => {
  let location = useLocation();
  const courseData = location.state;
  let {
    CourseLevel,
    CourseTitle,
    CourseProviderName,
    DepartmentName,
    CourseSubjectMatter,
    CourseFullDescription,
    CourseCode,
    EstimatedCompletionTime,
  } = courseData.metadata.Course;

  let { EndDate, StartDate, InLanguage } = courseData.metadata.CourseInstance;
  // Preparing the data to be displayed
  // CourseTitle = CourseTitle.split("|")[1].trim();

  return (
    <>
      <h2>{CourseTitle}</h2>
      <div>
        <div className={classes.container}>
          <h3>Course Info</h3>
          <div className={classes.button}>Edit</div>
        </div>
        <div className={classes.grid}>
          <label>Provider:&nbsp;</label>
          <input placeholder={CourseProviderName} />
          <label>Course Level:&nbsp;</label>
          <input placeholder={CourseLevel} />
          <label>Department Name: &nbsp;</label>
          <input placeholder={DepartmentName} />
          <label>Subject Matter: &nbsp;</label>
          <input placeholder={CourseSubjectMatter} />
          <label>Course Code&nbsp;</label>
          <input placeholder={CourseCode} />
          <label>Estimated Time:&nbsp;</label>
          <input placeholder={EstimatedCompletionTime} />
          <label>Start Date:&nbsp;</label>
          <input placeholder={Date(StartDate).toString()} />
          <label>End Date:&nbsp;</label>
          <input placeholder={Date(EndDate).toString()} />
        </div>
        <div className={classes.courseDesc}>{CourseFullDescription}</div>
      </div>
    </>
  );
};

export default Course;
