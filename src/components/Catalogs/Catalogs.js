import React, { useState, useEffect } from "react";
import axios from "axios";

import classes from "./Catalogs.module.css";
import icon from "../../images/placeholder.jpg";

const data = [
  "Catalog Title 1",
  "Catalog Title 2",
  "Catalog Title 3",
  "Catalog Title 4",
  "Catalog Title 5",
  "Catalog Title 6",
  "Catalog Title 7",
];

const Catalog = (props) => {
  // Initial state for tracking catalogs
  const [catalogsState, setCatalogsState] = useState({
    providers: null,
    isLoading: false,
    error: null,
  });

  const catalogs_api_url = process.env.REACT_APP_XIS_CATALOGS_API;
  let result = (
    <div>Error Loading experiences. Please contact an administrator.</div>
  );

  /* Whenever the component first renders, make an API call to find providers
        using the keyword in the url */
  useEffect(() => {
    let url = catalogs_api_url;
    setCatalogsState((previousState) => {
      const resultState = {
        providers: null,
        isLoading: true,
        error: null,
      };
      return resultState;
    });
    axios
      .get(url)
      .then((response) => {
        setCatalogsState((previousState) => {
          return {
            providers: response.data, // replace with arr
            isLoading: false,
            error: null,
          };
        });
      })
      .catch((err) => {
        setCatalogsState((previousState) => {
          return {
            providers: data, // replace with arr
            isLoading: false,
            error: err,
          };
        });
      });
  }, []);

  const handleClick = () => {
    props.history.push("/courses");
  };

  if (catalogsState.isLoading) {
    result = <div>Loading...</div>;
  } else if (catalogsState.providers && catalogsState.isLoading === false) {
    result = catalogsState.providers.map((catalog, index) => {
      return (
        <div className={classes.catalog} key={index} onClick={handleClick}>
          <img src={icon} alt={"Course Catalog Image"} />
          <div className={classes.contentWrapper} onClick={() => handleClick()}>
            <div className={classes.catalogTitle}>{catalog}</div>
          </div>
        </div>
      );
    });
  } else {
    result = (
      <div>Error Loading experiences. Please contact an administrator.</div>
    );
  }

  return (
    <div>
      <div className={classes.title}>
        {`Catalog (${
          /*Needs to count the number of results from the catalog call */
          data.length
        }`}
        )
      </div>
      <div className={classes.container}>{result}</div>
    </div>
  );
};

export default Catalog;
