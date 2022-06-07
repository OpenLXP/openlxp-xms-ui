import CatalogCard from "../CatalogCard/CatalogCard";
import icon from "../../../../images/placeholder.jpg";
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
        console.log(error);
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
      <h1 className="font-sans text-2xl py-8">Course Catalogs</h1>
      <div
        className="flex flex-wrap justify-left gap-8"
        data-testid="catalog-list">
        {content}
      </div>
    </div>
  );
};
export default CatalogsList;
