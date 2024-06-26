import {
  Switch,
  Route,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  // Conditionally renders either the main website or the dashboard without
  // the header or footer.
  const loadContent = () => {
    const location = useLocation();

    const dashboard = () => (
      <Route path="/dashboard" component={DashboardPage} />
    );

    const mainContent = () => <Route path="/" component={MainPage} />;

    return location.pathname.includes("dashboard")
      ? dashboard()
      : mainContent();
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Route to="/" component={loadContent} />
      </div>
    </Router>
  );
};

export default App;
