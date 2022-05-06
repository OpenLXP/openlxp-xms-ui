import React from "react";
import { NavLink } from "react-router-dom";

// Local imports
import icon from "../../resources/internal/dodLogo.png";
import HeaderLogo from "./Logo/HeaderLogo";
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
    <header className="bg-gradient-to-t from-blue-medium to-blue text-white">
      <div className="w-10/12 mx-auto h-auto pt-5">
        <HeaderLogo
          title={logo.title}
          subtitle={logo.subtitle}
          img={logo.img}
        />
        <div className=" border-t flex flex-row justify-between mt-4 mx-2">
          <NavBar navButtons={navButtons} />
          <div className="flex flex-row justify-end">
            <div className="hover:bg-blue-light rounded-t-lg md:text-lg mt-2 p-2 mx-2">
              <NavLink to={"/login"} className="hover:bg-blue-light p-0 mt-2">
                Sign In
              </NavLink>
            </div>
            <div className=" hover:bg-blue-light rounded-t-lg md:text-lg mt-2 p-2 mx-2">
              <NavLink to={"/register"} className="hover:bg-blue-light p-0 mt-2">
                Register
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
