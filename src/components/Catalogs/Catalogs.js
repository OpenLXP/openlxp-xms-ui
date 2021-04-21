import classes from "./Catalogs.module.css";
import React from "react";
import icon from "../../images/placeholder.jpg";

const data = [
  {
    title: "Catalog Title",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptates doloribus numquam enim repellat vero minima quod quo vitae veniam? Ducimus animi ipsa reiciendis laborum distinctio adipisci deserunt cupiditate in?",
  },

  {
    title: "Catalog Title",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptates doloribus numquam enim repellat vero minima quod quo vitae veniam? Ducimus animi ipsa reiciendis laborum distinctio adipisci deserunt cupiditate in?",
  },

  {
    title: "Catalog Title",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptates doloribus numquam enim repellat vero minima quod quo vitae veniam? Ducimus animi ipsa reiciendis laborum distinctio adipisci deserunt cupiditate in?",
  },
];

const Catalog = ({ history }) => {
  const handleClick = (e) => {
    alert('You have clicked!!!!!!')
    // history.push("/");
  };
  const makeCatalogs = data.map((catalog, index) => {
    return (
      <div className={classes.catalog} key={index} onClick={handleClick}>
        <img src={icon} alt="" />
        <div className={classes.contentWrapper}>
          <div className={classes.catalogTitle}>{catalog.title}</div>
          <div className={classes.content}>{catalog.content}</div>
        </div>
      </div>
    );
  });

  return (
    <div className={classes.container}>
      <div className={classes.title}>Catalogs</div>

      {makeCatalogs}
    </div>
  );
};

export default Catalog;
