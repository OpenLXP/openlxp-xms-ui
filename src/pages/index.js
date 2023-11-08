'use strict';

import {
  Route,
  useLocation,
} from "react-router-dom";
import MainPage from "./MainPage";
import DashboardPage from "./DashboardPage";
// import { AuthProvider } from "../context/authContext";
import { useRouter } from 'next/router';

const App = ({href}) => {
  // Conditionally renders either the main website or the dashboard without
  // the header or footer.
  const router = useRouter();
  const loadContent = () => {
    const location = useLocation();

    const dashboard = () => (
      router.push("/DashboardPage")
    );

    const mainContent = () => router.push("/MainPage");

    return location.pathname.includes("dashboard")
      ? dashboard()
      : mainContent();
  };

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/MainPage')
  }


  return (

        <div className="flex flex-col min-h-screen">
          <MainPage />
        </div>
  );
};

export default App;