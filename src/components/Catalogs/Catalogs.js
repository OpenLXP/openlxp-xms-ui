import React, { useState, useEffect } from "react";
import axios from 'axios';

import classes from "./Catalogs.module.css";
import icon from "../../images/placeholder.jpg";

const data = [
  {
    title: "Catalog Title 1",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptates doloribus numquam enim repellat vero minima quod quo vitae veniam? Ducimus animi ipsa reiciendis laborum distinctio adipisci deserunt cupiditate in? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptates doloribus numquam enim repellat vero minima quod quo vitae veniam? Ducimus animi ipsa reiciendis laborum distinctio adipisci deserunt cupiditate in? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptates doloribus numquam enim repellat vero minima quod quo vitae veniam? Ducimus animi ipsa reiciendis laborum distinctio adipisci deserunt cupiditate in? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptates doloribus numquam enim repellat vero minima quod quo vitae veniam? Ducimus animi ipsa reiciendis laborum distinctio adipisci deserunt cupiditate in? lorem",
  },
  {
    title: "Catalog Title 2",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptates doloribus numquam enim repellat vero minima quod quo vitae veniam? Ducimus animi ipsa reiciendis laborum distinctio adipisci deserunt cupiditate in?",
  },
  {
    title: "Catalog Title 3",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptates doloribus numquam enim repellat vero minima quod quo vitae veniam? Ducimus animi ipsa reiciendis laborum distinctio adipisci deserunt cupiditate in?",
  },
];

const Catalog = (props) => {
  // Initial state for tracking catalogs
  const [catalogsState, setCatalogsState] = useState({
    providers: null,
    isLoading: false,
    error: null
  });

  const catalogs_api_url = process.env.REACT_APP_XIS_CATALOGS_API;
  let result = (
    <div>
      Error Loading experiences. Please contact an administrator.
    </div>
  )

  /* Whenever the component first renders, make an API call to find providers
        using the keyword in the url */
  useEffect(() => {
    let url = catalogs_api_url;
    setCatalogsState(previousState => {
      const resultState = {
        providers: null,
        isLoading: true,
        error: null
      }
      return resultState
    });
    axios.get(url)
      .then(response => {
        setCatalogsState(previousState => {
          return {
            providers: response.data,
            isLoading: false,
            error: null
          }
        });
      })
      .catch(err => {
        setCatalogsState(previousState => {
          return {
            providers: null,
            isLoading: false,
            error: err
          }
        })
      });
  }, []);

  const handleClick = () => {
    props.history.push("/courses");
  };

  if (catalogsState.isLoading) {
    result = (
      <div>
        Loading...
      </div>
    )
  } else if (catalogsState.providers && catalogsState.isLoading === false){
    result = catalogsState.providers.map((catalog, index) => {
      return (
        <div className={classes.catalog} key={index} onClick={handleClick}>
          <img src={icon} alt={"Alt img"} />
          <div className={classes.contentWrapper} onClick={() => handleClick()}>
            <div className={classes.catalogTitle}>{catalog}</div>
          </div>
        </div>
      );
    });
  } else {
    result = (
      <div>
        Error Loading experiences. Please contact an administrator.
      </div>
    )
  }

  return (
    <div className={classes.container}>
      <div className={classes.title}>{`Catalog (${data.length}`})</div>
        {result}
    </div>
  );
};

export default Catalog;
