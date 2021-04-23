import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import WelcomeScreen from "./components/Welcome Screen/WelcomeScreen"
import Catalog from "./components/Catalogs/Catalogs";
import Courses from "./components/Courses/Courses"

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
            </Switch>
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
