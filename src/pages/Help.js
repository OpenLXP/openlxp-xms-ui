const Help = () => {

    let help = {
      title: "Help",
      message: [
        "The Experience Management Service is the human-facing application enabling an Experience Owner or Experience Manager to modify or augment a learning metadata record ingested by the Experience Index Service (XIS).  XMS is a user interface facilitating modification and augmentation of records by learning experience owners and managers. This web application enables experience owners/managers to modify/augment experience metadata (i.e., the admin portal).",
        "Please navigate to the Sign in or Register page to get started!"
      ],
    };
  
    return (
      <>
        <main className="font-sans">
          <h3 className="text-3xl font-semibold mb-5 pb-4 border-b-2">{help.title}</h3>
          {help.message.map((message, index) => {
            return (
              <div className="mb-5" key={index}>
                {message}
              </div>
            );
          })}
  
        </main>
      </>
    );
  };
  export default Help;
  