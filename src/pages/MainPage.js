import { Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Login from "../components/Login/Login";
import WelcomeScreen from "../components/WelcomeScreen/WelcomeScreen";
import Footer from "../components/Footer/Footer";
const MainPage = () => {
  return (
    <>
      <Route path="/" component={Header} />
      <div className="w-10/12 p-2 mx-auto">
        <div className="bg-gray-100 p-8 my-10 rounded-md">
          <Switch>
            <Route path="/" exact component={WelcomeScreen} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </div>
      <Route path="/" component={Footer} />
    </>
  );
};
export default MainPage;
