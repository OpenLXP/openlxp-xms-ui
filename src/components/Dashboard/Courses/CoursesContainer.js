import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import CourseList from "./CourseList/CourseList";
import { catalog_courses_url } from "../../../config/endpoints";
import { axiosInstance } from "../../../config/axiosInstance";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/solid';

const Courses = (props) => {
  // Default state of the course data.
  const [courseData, setCourseData] = useState({
    courses: null,
    isLoading: true,
    error: null,
  });

  const [coursesToShow, setCoursesToShow] = useState(null);

  // Keeps the state of page and total pages
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [searchQuery, setSearchQuery] = useState("");

  // Gets the data passed from the catalog click event
  const location = useLocation();
  const catalogTitle = location.state;

  const sortCourses = (event) => {
    if(/[<>/?+={};#$%*()`~\\]/.test(event.key)){
      event.preventDefault();
    }

    let query = event.target.value;
    if(event.key === 'Enter'){
      setSearchQuery(query);
    }
  };

  // Building the api call based on the catalog clicked
  const catalog_courses_api_url = catalog_courses_url + `${catalogTitle}` + "?page=" + page + "&search=" + searchQuery ;
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
        setTotalPages(Math.ceil(response.data.experiences.count / 10));
      })
      .catch((error) => {
        setCourseData({
          courses: null,
          isLoading: false,
          error: error,
        });
        console.log(error);
      });
  }, [page, searchQuery]);

  const table = useMemo(() => {
    if (courseData.isLoading) {
      return <div>Loading...</div>;
    } else if (courseData.courses && !courseData.isLoading) {
      return <CourseList data={coursesToShow} />;
    } else if (courseData.error){
      return <div>Error loading courses. Please contact an administrator.</div>;
    }
  },[coursesToShow]);

  function clearSearch(){
    setSearchQuery("");
    document.getElementById('search').value="";
  }
  
  return (
    <div className="rounded-lg align-middle min-w-full overflow-auto mx-auto">
      <h2 className="text-2xl font-semibold mt-8">Course List</h2>
      {!courseData.error && (
        <div className="flex flex-row">
          <div className={"rounded-md  w-full my-5 ml-0.5"}>
            <div className="flex flex-row bg-white justify-between pl-2 pr-3 py-2 focus-within:ring-blue-light focus-within:ring-2 rounded-md">
              <input
                id="search"
                type={"text"}
                className={"w-full bg-transparent px-2 py-1 outline-none"}
                placeholder={"Search"}
                onKeyPress={(event) => sortCourses(event)}
                defaultValue = {searchQuery}
              />
              <div className={"flex justify-center items-center"}>
                <ion-icon name="search-outline" />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => clearSearch()}
                className={`text-blue justify-end`}
                disabled={searchQuery===""}
              > Clear Search
              </button>
            </div>
          </div>
                      
          {/* Pagination */}
          <button
            onClick={() => setPage(1)}
            title='First'
            className={`disabled:saturate-0 disabled:cursor-not-allowed disabled:pointer-events-none disabled:hover:bg-inherit flex justify-center items-center gap-2 ml-4 mr-2 mt-6 h-10 text-blue rounded-md hover:shadow-md bg-blue-50 hover:bg-blue-light hover:text-white px-2 py-2 transform transition-all duration-150 ease-in-out border-blue border-2 outline-none focus:ring-2 ring-blue`}
            disabled={page === 1 ? true : false}
          >
            <ChevronDoubleLeftIcon className='h-6 w-6' />
          </button>
          <button
            onClick={() => setPage(page - 1)}
            className="flex justify-center items-center gap-2 text-blue hover:text-white rounded-md hover:shadow-md bg-blue-50 hover:bg-blue-light pl-2 pr-4 py-2 mt-6 h-10 w-30 align-center transform transition-all duration-150 ease-in-out border-blue border-2 outline-none focus:ring-2 ring-blue disabled:saturate-0 disabled:cursor-not-allowed disabled:pointer-events-none disabled:hover:bg-inherit"
            disabled={page === 1 ? true : false}
          >
            <ChevronLeftIcon className='h-6 w-6' />
            Previous
          </button>
          <button
            key={page}
            disabled
            // onClick={() => setPage(page)}
            className={`${
              page === page
                ? 'bg-blue-400 text-white'
                : 'bg-blue-50 text-blue-400'
            } flex justify-center items-center gap-2 h-10 rounded-md hover:shadow-md bg-blue hover:bg-blue-light hover:text-white px-2 py-2 mt-6 ml-2 transform transition-all duration-150 ease-in-out border-blue border-2 outline-none focus:ring-2 ring-blue`}
          >
            {page}
          </button>
          <button
            onClick={() => setPage(page + 1)}
            className="disabled:saturate-0 disabled:cursor-not-allowed disabled:pointer-events-none disabled:hover:bg-inherit flex justify-center items-center gap-2 text-blue rounded-md hover:shadow-md bg-blue-50 hover:bg-blue-light hover:text-white pl-4 pr-2 py-2 m-2 mt-6 h-10 w-30 align-items-center transform transition-all duration-150 ease-in-out border-blue border-2 outline-none focus:ring-2 ring-blue"
            disabled={totalPages <= page ? true : false}
          >
            Next
            <ChevronRightIcon className='h-6 w-6' />
          </button>
          <button
            title='Last'
            onClick={() => setPage(totalPages)}
            disabled={totalPages <= page ? true : false}
            className={`disabled:saturate-0 disabled:cursor-not-allowed disabled:pointer-events-none disabled:hover:bg-inherit flex justify-center items-center gap-2 mt-6 h-10 text-blue rounded-md hover:shadow-md bg-blue-50 hover:bg-blue-light hover:text-white p-2 py-2 transform transition-all duration-150 ease-in-out border-blue border-2 outline-none focus:ring-2 ring-blue`}
          >
            <ChevronDoubleRightIcon className='h-6 w-6' />
          </button>
        </div>
      )}
      <div className="overflow-hidden rounded-lg">{table}
      </div>
    </div>
  );
};
export default Courses;
