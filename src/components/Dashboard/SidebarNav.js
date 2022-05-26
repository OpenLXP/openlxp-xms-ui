import { NavLink, useHistory } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import DashboardHeader from "./Header/DashboardHeaderIcon";
import {useEffect} from "react";

const SidebarNav = (props) => {
  // Passed in from the
  const navigation = props.navButtons || [];

  const buttons = navigation.map((item, index) => (
    <div className="w-10" key={index}>
      <NavLink
        to={item.path}
        className="cursor-pointer pr-44 xl:pr-56 py-2 pl-3 rounded-lg"
        activeClassName="cursor-pointer bg-blue-dark pr-48">
        {item.title}
      </NavLink>
    </div>
  ));
  
  const history = useHistory();
  const {user, logout} = useAuth();
  useEffect(() => {
    if(!user){
      history.push("/login");
    }
  });

  return (
    <>
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 xl:w-72">
          <DashboardHeader />
          <div className="flex flex-col h-0 flex-1 border-t">
            <div className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden bg-blue">
              <div className="flex flex-col mt-2 mx-4">
                <span className="px-2 text-white">
                  {user?.user?.first_name}&nbsp;{user?.user?.last_name}
                </span>
                <button className="text-left flex-0 px-2 space-y-1 text-white" 
                onClick={()=>{logout()}}>Logout</button>
              </div>
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
