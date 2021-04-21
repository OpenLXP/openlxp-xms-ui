import classes from "./Footer.module.css";
import React from "react";

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div>Config footer</div>
      </div>
    </footer>
  );
};

export default Footer;
