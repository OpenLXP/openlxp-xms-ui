import React, { useState } from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import dodLogo from "../../resources/internal/dodLogo.png";

const Header = (props) => {
  const [showLogin, setShowLogin] = useState(null);

  // DS for generating buttons
  const buttons = [
    { name: "Catalogs", route: "/catalogs" },
    { name: "Courses", route: "/courses" },
    { name: "Tasks", route: "/tasks" },
  ];

  const handleClick = () => {};

  const makeNavButtons = buttons.map((button) => {
    return (
      <div className={classes.navItemWrapper}>
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
            <div>Experience Management Service</div>
            <div>Digital Learning Portal</div>
            <div>U.S Department of Defense</div>
          </div>
        </div>

        <div className={classes.signIn}>Sign In</div>
        
      </div>
      <div className={classes.nav}>{makeNavButtons}</div>
    </header>
  );
};

export default Header;
