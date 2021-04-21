import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <div className={"content"}>
          <Switch>
            <Route path="/" component={null} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
