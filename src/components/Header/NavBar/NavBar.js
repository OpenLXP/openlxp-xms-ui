import { NavLink } from "react-router-dom";
import { useAuth } from "../../../context/authContext";

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
              className="p-2 mx-2 hover:bg-blue-light lg:text-lg rounded-t-lg md:text-lg"
              key={index}>
              <NavLink to={button.route} data-testid={button.testId}>
                {button.name}
              </NavLink>
            </div>
          );
        }
        if (user) {
          return (
            <div
              className="p-2 mx-2 hover:bg-blue-light lg:text-lg rounded-t-lg md:text-lg"
              key={index}>
              <NavLink to={button.route} data-testid={button.testId}>
                {button.name}
              </NavLink>
            </div>
          );
        }
        
      })}
    </div>
  );
};
export default NavBar;
