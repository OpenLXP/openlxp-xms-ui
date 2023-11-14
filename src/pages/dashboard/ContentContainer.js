'use strict';

import CatalogsContainer from "./Catalogs/CatalogsContainer";
import Footer from "../../components/Footer/Footer";

const ContentContainer = (props) => {
  return (
    <main className="flex-1 relative overflow-y-auto focus:outline-none">
      <div className="w-10/12 mx-auto px-4 sm:px-6 md:px-8">
        <CatalogsContainer />
      </div>
      <div className='bottom-0'>
        <Footer/>
      </div>
    </main>
  );
};

export default ContentContainer;
