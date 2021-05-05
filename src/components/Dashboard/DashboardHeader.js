import React from "react";
import { NavLink } from "react-router-dom";

import icon from "../../resources/internal/dodLogo.png";
import img from "../Header/Logo/Logo";

const DashboardHeader = (props) =>{
    return(
    <header className="bg-blue  text-white">
      <div className="w-10/12 mx-auto h-auto pt-5">
      <NavLink className="flex flex-row items-center text-white" to="/">
        <img src={icon} alt="This is the dod Logo" className={"pl-3"} />
        <div className="flex flex-col align-baseline pl-2">
          <div className="lg:text-xl sm:text-lg">Expereince Management Service</div>
          {/* <div className="lg:text-lg sm:text-base">Department of Defense</div> */}
        </div>
      </NavLink>
      </div>
    </header>
    );
};
export default DashboardHeader;