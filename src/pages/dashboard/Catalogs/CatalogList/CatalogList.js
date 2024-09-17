'use strict';

import CatalogCard from "../CatalogCard/CatalogCard";
import icon from "../../../../public/catalog.png";
import { configUrl, host } from "../../../../config/endpoints";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../../../config/axiosInstance";

const CatalogsList = ({catalogs}) => {

  const [config, setConfig] = useState(null);
  useEffect(() => {
    axiosInstance.get(configUrl)
      .then((response) => {
        setConfig({
          config: response.data,
        });
      })
      .catch((error) => {
        console.log("Catalogs unable to be loaded. Contact system admin.");
      });
  }, []);

  const content = catalogs?.map((catalog) => {
    let configData = config?.config?.find(data => data.name === catalog);
    if(configData){
      return <CatalogCard title={catalog} img={`${host}${configData.image}`} key={catalog} />;
    }
    return <CatalogCard title={catalog} img={icon} key={catalog} />;
  });

  return (
    <div>
      <h1 className="font-sans text-3xl font-semibold mb-5 pb-4 pt-8 border-b-2">Content Catalogs</h1>
      <div
        className="flex flex-wrap justify-left gap-8"
        data-testid="catalog-list">
        {content}
      </div>
    </div>
  );
};
export default CatalogsList;
