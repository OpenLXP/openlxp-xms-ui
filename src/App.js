import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";
import Catalog from "./components/Catalogs/Catalogs";
import Courses from "./components/Courses/Courses";
import Course from "./components/Course/Course";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header />
        <div className="w-10/12 mx-auto bg-gray-100 p-8 my-10 rounded-md">
          <Switch>
            <Route path="/" exact component={WelcomeScreen} />
            <Route path="/catalogs" component={Catalog} />
            <Route path="/courses" component={Courses} />
            <Route path="/login" component={Login} />
            <Route path="/course" component={Course} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
