import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Breadcrumbs = (props) => {
  // Get the current location of the user.
  const location = useLocation();
  const pages = location.pathname.split("/");

  let breadcrumbs = pages.map((page, index) => {
    if (index === 0)
      return (
        <NavLink to="/" className="mr-5" key={index}>
          Home
        </NavLink>
      );
    if (page) {
      return (
        <NavLink to={`${pages.slice(0, index + 1).join("/")}`} key={index}>
          {page.split("")[0].toUpperCase() + page.slice(1, page.length)}
        </NavLink>
      );
    }
    return null;
  });

  return <div className="flex flex-row pl-2 mt-5">{breadcrumbs}</div>;
};
export default Breadcrumbs;
