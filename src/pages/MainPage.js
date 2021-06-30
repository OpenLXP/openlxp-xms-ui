import { Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import WelcomeScreen from "../components/WelcomeScreen/WelcomeScreen";
import Footer from "../components/Footer/Footer";
const MainPage = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Route path="/" component={Header} />
      <div className="w-10/12 p-2 mx-auto">
        <div className="bg-gray-100 p-8 my-10 rounded-md">
          <Switch>
            <Route path="/" exact component={WelcomeScreen} />
          </Switch>
        </div>
      </div>
      <div className='absolute bottom-0 w-full'>
        <Route path="/" component={Footer} />
      </div>
    </div>
  );
};
export default MainPage;
