const WelcomeScreen = () => {
  // custom text from the admin panel
  let welcome = {
    title: "Welcome!",
    subtitle: "DOD - Experience Management Service",
    message: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ipsum molestiae illum cumque aliquid dolorem veniam iusto facere dolorum architecto maiores recusandae ipsa nihil sapiente eius nostrum, mollitia voluptatum error quis quos deleniti molestias enim. Provident laborum, inventore unde error quas, praesentium excepturi ipsa molestiae quasi eos voluptatem omnis eaque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ipsum molestiae illum cumque aliquid dolorem veniam iusto facere dolorum architecto maiores recusandae ipsa nihil sapiente eius nostrum, mollitia voluptatum error quis quos deleniti molestias enim. Provident laborum, inventore unde error quas, praesentium excepturi ipsa molestiae quasi eos voluptatem omnis eaque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ipsum molestiae illum cumque aliquid dolorem veniam iusto facere dolorum architecto maiores recusandae ipsa nihil sapiente eius nostrum, mollitia voluptatum error quis quos deleniti molestias enim. Provident laborum, inventore unde error quas, praesentium excepturi ipsa molestiae quasi eos voluptatem omnis eaque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ipsum molestiae illum cumque aliquid dolorem veniam iusto facere dolorum architecto maiores recusandae ipsa nihil sapiente eius nostrum, mollitia voluptatum error quis quos deleniti molestias enim. Provident laborum, inventore unde error quas, praesentium excepturi ipsa molestiae quasi eos voluptatem omnis eaque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ipsum molestiae illum cumque aliquid dolorem veniam iusto facere dolorum architecto maiores recusandae ipsa nihil sapiente eius nostrum, mollitia voluptatum error quis quos deleniti molestias enim. Provident laborum, inventore unde error quas, praesentium excepturi ipsa molestiae quasi eos voluptatem omnis eaque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ipsum molestiae illum cumque aliquid dolorem veniam iusto facere dolorum architecto maiores recusandae ipsa nihil sapiente eius nostrum, mollitia voluptatum error quis quos deleniti molestias enim. Provident laborum, inventore unde error quas, praesentium excepturi ipsa molestiae quasi eos voluptatem omnis eaque!",
    ],
  };

  return (
    <>
      <main className="font-sans">
        <h1 className="text-5xl my-8">{welcome.title}</h1>
        <h3 className="text-3xl mb-5">{welcome.subtitle}</h3>
        {welcome.message.map((message, index) => {
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
export default WelcomeScreen;
