import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/authContext";

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
    {
      name: "Catalogs", 
      route: "/dashboard",
      testID: "catalog-btn"
    },
    {
      name: "About ECC", 
      route: "/about",
      testID: "about-btn"
    },
    {
      name: "Help", 
      route: "/help",
      testID: "help-btn"
    }
  ];

  // to be replaced from the admin console
  const logo = {
    title: "Experience Management Service",
    subtitle: "Department of Defense",
    img: icon,
  };

  const {user, logout} = useAuth();

  return (
    <header className="bg-gradient-to-t from-blue-medium to-blue text-white">
      <div className="w-10/12 flex flex-row justify-between mx-auto h-auto rounded-lg items-center pt-2">
        {/* <HeaderLogo
          title={logo.title}
          subtitle={logo.subtitle}
          img={logo.img}
        /> */}
        <div className="flex flex-row items-center">
        <img src={icon} alt="DOD Logo" className={"pl-3"} width={60} height={60}/>
        <NavBar navButtons={navButtons} />
        </div>
        {/* <div className="flex flex-row justify-between mt-2"> */}
          <div className="flex flex-row justify-end">
            {!user ? (
              <div className="flex flex-row">
                <div className="hover:bg-blue-light rounded border md:text-lg m-2 p-2">
                  <NavLink to={"/login"} className="hover:bg-blue-light p-0 mt-2">
                    Sign In
                  </NavLink>
                </div>
                <div className=" hover:bg-blue-light rounded border md:text-lg m-2 p-2">
                  <NavLink to={"/register"} className="hover:bg-blue-light p-0 mt-2">
                    Sign Up
                  </NavLink>
                </div>
              </div>
            ) : (
              <div>
                <span className="px-2 text-white">
                  {user?.user?.first_name}&nbsp;{user?.user?.last_name}
                </span>
                <button className="hover:bg-blue-light rounded border md:text-lg m-2 p-2" 
                onClick={()=>{logout()}}>Logout </button>
              </div>
            )}
          </div>
        {/* </div> */}
      </div>
    </header>
  );
};

export default Header;
