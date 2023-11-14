'use strict';

import CatalogsContainer from "./Catalogs/CatalogsContainer";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function Dashboard() {
  return (
    <div className={'relative custom-scroll min-h-screen'}>
      <Header />
      {/* <div className='w-10/12 mx-auto px-4 sm:px-6 md:px-8'> */}
      <div className='max-w-7xl mx-auto px-4 sm:px-4 lg:px-8'>
        <CatalogsContainer />
      </div>
      <Footer />
    </div>
  );
}
