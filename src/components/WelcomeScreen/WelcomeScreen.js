import { useHistory } from "react-router-dom";

const WelcomeScreen = () => {
  const history = useHistory();

  // custom text from the admin panel
  let welcome = {
    // title: "Welcome!",
    subtitle: "About Experience Management Service",
    message: [
      "The Experience Management Service is the human-facing application enabling an Experience Owner or Experience Manager to modify or augment a learning metadata record ingested by the Experience Index Service (XIS).  XMS is a user interface facilitating modification and augmentation of records by learning experience owners and managers. This web application enables experience owners/managers to modify/augment experience metadata (i.e., the admin portal).",
      "Please navigate to the Sign in or Register page to get started!"
    ],
  };

  return (
    <>
      <main className="font-sans">
        {/* <h1 className="text-5xl my-8">{welcome.title}</h1> */}
        <h3 className="text-3xl font-semibold mb-5 pb-4 border-b-2">{welcome.subtitle}</h3>
        {welcome.message.map((message, index) => {
          return (
            <div className="mb-5" key={index}>
              {message}
            </div>
          );
        })}

        <button
          id={'create-account-button'}
          className='text-blue-400 hover:underline hover:text-blue-500 cursor-pointer transition-all duration-150 ease-in-out'
          onClick={() => history.push("/register")}>
          Click Here to Get Started!
        </button>
      </main>
    </>
  );
};
export default WelcomeScreen;
