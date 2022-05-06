import React from "react";
import { NavLink } from "react-router-dom";
import icon from "../../../resources/internal/dodLogo.png";

const DashboardHeader = (props) =>{
    return(
    <div className="bg-blue  text-white pb-5">
      <div className="w-10/12 mx-auto h-auto">
      <NavLink className="flex flex-row items-center text-white" to="/">
        <img src={icon} alt="This is the dod Logo" className={"pl-3"} />
        <div className="flex flex-col align-baseline pl-2">
          <div className="lg:text-xl sm:text-lg">Experience Management Service</div>
          {/* <div className="lg:text-lg sm:text-base">Department of Defense</div> */}
        </div>
      </NavLink>
      </div>
    </div>

    );
};
export default DashboardHeader;