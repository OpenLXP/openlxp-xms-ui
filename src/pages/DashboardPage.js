import { NavLink, Switch, Route } from "react-router-dom";
import ContentContainer from "../components/Dashboard/ContentContainer";
import SidebarNav from "../components/Dashboard/SidebarNav";

const Dashboard = (props) => {
  const navigation = [{ title: "Catalogs", path: "/dashboard" }];

  return (
    <>
      <div className="h-screen flex flex-col overflow-hidden bg-gray-100">
        <header className="bg-blue p-2"></header>
        <div className="h-screen flex  overflow-hidden bg-gray-100">
          <SidebarNav navButtons={navigation} />
          <ContentContainer />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
