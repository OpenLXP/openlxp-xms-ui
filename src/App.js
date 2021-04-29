import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";
import Catalog from "./components/Catalogs/Catalogs";
import Courses from "./components/Courses/Courses";
import Course from "./components/Course/Course";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <div className={"container"}>
          <div className={"content"}>
            <Switch>
              <Route path="/" exact component={WelcomeScreen} />
              <Route path="/catalogs" component={Catalog} />
              <Route path="/courses" component={Courses} />
              <Route path="/login" component={Login} />
              <Route path="/course" component={Course} />
            </Switch>
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
