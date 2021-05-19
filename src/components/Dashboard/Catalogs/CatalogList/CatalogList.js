import CatalogCard from "../CatalogCard/CatalogCard";
import icon from "../../../../images/placeholder.jpg";

const CatalogsList = (props) => {
  const catalogs = props.catalogs || [];

  const content = catalogs.map((catalog) => {
    return <CatalogCard title={catalog} img={icon} key={catalog} />;
  });

  return (
    <div>
      <h1 className="font-sans text-2xl py-8">Course Catalogs</h1>
      <div
        className="flex flex-wrap justify-between"
        data-testid="catalog-list">
        {content}
      </div>
    </div>
  );
};
export default CatalogsList;
