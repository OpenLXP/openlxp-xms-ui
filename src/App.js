import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import WelcomeScreen from "./components/Welcome Screen/WelcomeSceen"

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <div className={"container"}>
          <div className={"content"}>
            <Switch>
              <Route path="/" component={WelcomeScreen} />
            </Switch>
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
