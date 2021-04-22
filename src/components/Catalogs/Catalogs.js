import classes from "./Catalogs.module.css";
import React from "react";
import icon from "../../images/placeholder.jpg";

const data = [
  {
    title: "Catalog Title 1",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptates doloribus numquam enim repellat vero minima quod quo vitae veniam? Ducimus animi ipsa reiciendis laborum distinctio adipisci deserunt cupiditate in? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptates doloribus numquam enim repellat vero minima quod quo vitae veniam? Ducimus animi ipsa reiciendis laborum distinctio adipisci deserunt cupiditate in? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptates doloribus numquam enim repellat vero minima quod quo vitae veniam? Ducimus animi ipsa reiciendis laborum distinctio adipisci deserunt cupiditate in? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptates doloribus numquam enim repellat vero minima quod quo vitae veniam? Ducimus animi ipsa reiciendis laborum distinctio adipisci deserunt cupiditate in? lorem",
  },

  {
    title: "Catalog Title 2",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptates doloribus numquam enim repellat vero minima quod quo vitae veniam? Ducimus animi ipsa reiciendis laborum distinctio adipisci deserunt cupiditate in?",
  },

  {
    title: "Catalog Title 3",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptates doloribus numquam enim repellat vero minima quod quo vitae veniam? Ducimus animi ipsa reiciendis laborum distinctio adipisci deserunt cupiditate in?",
  },
];

const Catalog = ({ history }) => {
  const handleClick = () => {
    alert("You have clicked!!!!!!");
    // history.push("/");
  };
  const makeCatalogs = data.map((catalog, index) => {
    return (
      <div className={classes.catalog} key={index} onClick={handleClick}>
        <img src={icon} alt={"Alt img"} />
        <div className={classes.contentWrapper}>
          <div className={classes.catalogTitle}>{catalog.title}</div>
          <div className={classes.content}>{catalog.content}</div>
        </div>
      </div>
    );
  });

  return (
    <div className={classes.container}>
      <div className={classes.title}>{`Catalog (${data.length}`})</div>

      {makeCatalogs}
    </div>
  );
};

export default Catalog;
