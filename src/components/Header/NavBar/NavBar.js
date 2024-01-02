'use strict';

import { useAuth } from "../../../context/authContext";
import Link from "next/link";

const NavBar = (props) => {
  const navButtons = props.navButtons || [];
  const {user} = useAuth();

  return (
    <div className="flex flex-row" data-testid="navbar-menu">
      {/* Creating the buttons */}
      {navButtons.map((button, index) => {
        if (button.name !== 'Catalogs') {
          return (
            <div
              className="p-2 mx-2 hover:bg-blue-light lg:text-md rounded-t-lg md:text-md"
              key={index}>
              <Link href={button.route} data-testid={button.testId}>
                {button.name}
              </Link>
            </div>
          );
        }
        if (user) {
          return (
            <div
              className="p-2 mx-2 hover:bg-blue-light lg:text-md rounded-t-lg md:text-md"
              key={index}>
              <Link href={button.route} data-testid={button.testId}>
                {button.name}
              </Link>
            </div>
          );
        }
        
      })}
    </div>
  );
};
export default NavBar;
