import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  const navButtons = props.navButtons;
  return (
    <div className="flex flex-row">
      {/* Creating the buttons */}
      {navButtons.map((button, index) => {
        return (
          <div className="p-2 mt-2 mx-2 hover:bg-blue-light  lg:text-xl rounded-t-lg md:text-lg text-white">
            <NavLink to={button.route} key={index} data-testid={button.testId}>
              {button.name}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};
export default NavBar;
