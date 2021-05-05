import HeaderLogo from "../Header/Logo/Logo";
import dodImg from "../../resources/internal/dodLogo.png";
import { NavLink } from "react-router-dom";
import Header from "./DashboardHeader"

const SidebarNav = (props) => {
    // Passed in from the 
  const navigation = props.navButtons;

  const buttons = navigation.map((item) => (
    <div>
      <NavLink key={item.title} to={item.path} className="cursor-pointer">
        {item.title}
      </NavLink>
    </div>
  ));

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-col h-0 flex-1">
          <div className="flex-1 flex flex-col overflow-y-auto bg-blue">
            <Header/>
            <nav className="flex-0 px-2 py-4 space-y-1 text-white">
              {buttons}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SidebarNav;
