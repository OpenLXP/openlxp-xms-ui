import React from "react";
import { NavLink } from "react-router-dom";

// Local imports
import icon from "../../resources/internal/dodLogo.png";
import HeaderLogo from "./Logo/Logo";
import NavBar from "./NavBar/NavBar";

const Header = () => {
  const navButtons = [
    {
      name: "Home",
      route: "/",
      testId: "home-btn",
    },
  ];

  // to be replaced from the admin console
  const logo = {
    title: "Experience Management Service",
    subtitle: "Department of Defense",
    img: icon,
  };

  return (
    <header className="bg-gradient-to-t from-blue-light to-blue text-white">
      <div className="w-10/12 mx-auto h-auto pt-5">
        <HeaderLogo logo={logo} />
        <div className="border-t"/>
        <div className=" from-blue-light to-blue flex flex-row justify-between m-4">
          <NavBar navButtons={navButtons} />
          <div className="hover:bg-blue-light rounded-t-lg md:text-lg mt-2 p-2 mx-2">
            <NavLink to={"/dashboard"} className="hover:bg-blue-light p-0 mt-2">
              Sign In
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
