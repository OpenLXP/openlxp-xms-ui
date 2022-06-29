import { NavLink, Switch, Route } from "react-router-dom";
import ContentContainer from "../components/Dashboard/ContentContainer";
import DashboardHeader from "../components/Dashboard/Header/DashboardHeaderIcon";
import SidebarNav from "../components/Dashboard/SidebarNav";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


const Dashboard = (props) => {
  // const navigation = [{ title: "Catalogs", path: "/dashboard" }];

  return (
    <>
      <div className="h-screen flex flex-col overflow-hidden bg-gray-100">
        {/* <header className="bg-blue p-2 h-20"></header> */}
        {/* <DashboardHeader navButtons={navigation}/> */}
        <Header />
        <div className="h-screen flex  overflow-hidden bg-gray-100">
          {/* <SidebarNav navButtons={navigation} /> */}
          <ContentContainer />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
