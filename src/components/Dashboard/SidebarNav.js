import DashboardHeader from "../Dashboard/DashboardHeaderIcon";

import { NavLink } from "react-router-dom";

const SidebarNav = (props) => {
  // Passed in from the
  const navigation = props.navButtons;

  const buttons = navigation.map((item) => (
    <div className="w-10">
      <NavLink
        key={item.title}
        to={item.path}
        className="cursor-pointer pr-44 xl:pr-56 py-2 pl-3 rounded-lg"
        activeClassName="cursor-pointer bg-blue-dark pr-48"
      >
        {item.title}
      </NavLink>
    </div>
  ));

  return (
    <>
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 xl:w-72">
          <DashboardHeader />
          <div className="flex flex-col h-0 flex-1 border-t">
            <div className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden bg-blue">
              <nav className="flex-0 px-2 pt-10 space-y-1 text-white">
                {buttons}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SidebarNav;
