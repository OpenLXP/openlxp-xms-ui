import React, { useState } from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import dodLogo from "../../resources/internal/dodLogo.png";
import Login from "../Login/Login";

const Header = (props) => {
  const [showLogin, setShowLogin] = useState(false);

  // DS for generating buttons
  const buttons = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Catalogs",
      route: "/catalogs",
    },
    {
      name: "Courses",
      route: "/courses",
    },
    // {
    //   name: "Tasks",
    //   route: "/tasks",
    // },
  ];

  const makeNavButtons = buttons.map((button, index) => {
    return (
      <div className={classes.navItemWrapper} key={index}>
        <NavLink exact to={button.route} className={classes.navItem}>
          {button.name}
        </NavLink>
      </div>
    );
  });

  return (
    <header>
      <div className={classes.imgBar}>
        <div className={classes.icon}>
          <img className={classes.logo} src={dodLogo} alt={""} />
          <div className={classes.logoText}>
            <p className={classes.paraText}> <b className={classes.text}>Experience Management Service</b> </p>
            <p className={classes.paraText}> <b className={classes.subText}>U.S Department of Defense</b> </p>
          </div>
        </div>

        <div className={classes.signIn}>
          <NavLink to={"/login"}>Sign In</NavLink>
        </div>
      </div>
      <div className={classes.nav}>{makeNavButtons}</div>
    </header>
  );
};

export default Header;
