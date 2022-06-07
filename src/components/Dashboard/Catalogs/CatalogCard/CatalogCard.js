import React from "react";
import { NavLink } from "react-router-dom";

const CatalogCard = (props) => {
  const title = props.title;
  const img = props.img;

  return (
    <NavLink
      to={{ pathname: `/dashboard/${title}/courses`, state: title }}
      className="my-4"
      data-testid="nav-link">
      <div className="flex flex-row w-64 h-28 bg-gray-200 p-3 rounded-lg space-x-12 hover:h-32 hover:shadow-lg transition-shadow">
        <img
          src={img}
          alt="catalog image"
          className="object-contain rounded-md"
          width={100}
        />
        <div className="font-sans font-thin self-center text-2xl">{title}</div>
      </div>
    </NavLink>
  );
};
export default CatalogCard;
