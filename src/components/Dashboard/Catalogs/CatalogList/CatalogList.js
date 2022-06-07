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
        console.log(response);
        setConfig({
          config: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(catalogs);


  const content = catalogs?.map((catalog) => {
    console.log(config?.config?.find(data => data.name === catalog));
    let configData = config?.config?.find(data => data.name === catalog);
    if(configData){
      console.log("here");
      return <CatalogCard title={catalog} img={`${host}${configData.image.substring(1, configData.image.length)}`} key={catalog} />;
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
