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
      testId: "home-btn",
    },
    {
      name: "Catalogs",
      route: "/catalogs",
      testId: "catalogs-btn",
    },
    {
      name: "Courses",
      route: "/courses",
      testId: "courses-btn",
    },
    // {
    //   name: "Tasks",
    //   route: "/tasks",
    // },
  ];

  const makeNavButtons = buttons.map((button, index) => {
    return (
      <div
        className={classes.navItemWrapper}
        key={index}
        data-testid={button.testId}
      >
        <NavLink exact to={button.route} className={classes.navItem}>
          {button.name}
        </NavLink>
      </div>
    );
  });

  return (
    <header data-testid={"header-nav"}>
      <div className={classes.imgBar}>
        <div className={classes.icon}>
          <img
            className={classes.logo}
            src={dodLogo}
            alt={"dodLogo"}
            data-testid={"dod-logo"}
          />
          <div className={classes.logoText}>
            <p className={classes.paraText}>
              <b className={classes.text}>Experience Management Service</b>
            </p>
            <p className={classes.paraText}>
              <b className={classes.subText}>U.S. Department of Defense</b>
            </p>
          </div>
        </div>

        <div className={classes.signIn} data-testid={"login-btn"}>
          <NavLink to={"/login"}>Sign In</NavLink>
        </div>
      </div>
      <div className={classes.nav} data-testid={"button-group"}>
        {makeNavButtons}
      </div>
    </header>
  );
};

export default Header;
