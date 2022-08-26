import ContentContainer from "../components/Dashboard/ContentContainer";
import Header from "../components/Header/Header";

const Dashboard = (props) => {

  return (
    <>
      <div className="h-screen flex flex-col overflow-hidden bg-gray-100">
        <Header />
        <div className="h-screen flex  overflow-hidden bg-gray-100">
          <ContentContainer />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
