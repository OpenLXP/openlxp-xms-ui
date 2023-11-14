'use strict';

import Header from "../components/Header/Header";
import WelcomeScreen from "./WelcomeScreen/WelcomeScreen";
import Footer from "../components/Footer/Footer";

const MainPage = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Header />
      <div className="w-10/12 p-2 mx-auto">
        <div className="p-8 my-10 rounded-md">
            <WelcomeScreen/>
        </div>
      </div>
      <div className='absolute bottom-0 w-full'>
        <Footer />
      </div>
    </div>
  );
};
export default MainPage;
