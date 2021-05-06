import React, { useState, useEffect } from "react";
import axios from "axios";

import icon from "../../../images/placeholder.jpg";
import CatalogCard from "./CatalogCard/CatalogCard";

const Catalogs = (props) => {
  const [catalogs, setCatalogs] = useState({
    providers: null,
    isLoading: false,
    error: null,
  });

  // API Endpoint for XIS Catalogs.
  const catalogs_api_url = process.env.REACT_APP_XIS_CATALOGS_API;

  useEffect(() => {
    // Setting the catalogs to loading
    setCatalogs({
      isLoading: true,
    });

    // Requesting data from the API endpoint
    axios
      .get(catalogs_api_url)
      .then((resp) => {
        setCatalogs({
          providers: resp.data,
          isLoading: false,
          error: null,
        });
      })
      // If there is an error.
      .catch((err) => {
        setCatalogs({
          providers: null,
          isLoading: false,
          error: err,
        });
      });
  }, []);

  // Defualt state is to load nothing
  let content = null;

  // Show a loading message
  if (catalogs.isLoading) {
    content = <div> Loading...</div>;
  }
  // Show the contnet if there is any
  else if (catalogs.providers && !catalogs.isLoading) {
    content = catalogs.providers.map((catalogName) => {
      return <CatalogCard title={catalogName} img={icon} key={catalogName} />;
    });
  }
  // Show the error message if there is an error
  else {
    content = (
      <div>Error loading catalogs. Please contact an administrator</div>
    );
  }

  return (
    <div>
      <div className="font-sans text-2xl py-8 px-14">Course Catalogs</div>
      <div className="flex flex-wrap justify-around">{content}</div>
    </div>
  );
};
export default Catalogs;
