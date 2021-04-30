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
    <div className="container w-10/12 mx-auto rounded-md my-5 p-7 ">
      <div className="font-sans">
        <div className="text-5xl my-8">{welcome.title}</div>
        <div className="text-3xl mb-5">{welcome.subtitle}</div>
        {welcome.message.map((message) => {
          return <div className="mb-5">{welcome.message}</div>;
        })}
      </div>
    </div>
  );
};
export default WelcomeScreen;
