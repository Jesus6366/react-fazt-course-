import React from "react";
import ReactDom from "react-dom/client";
import Greeting from "./Greeting.jsx";
import Product from "./Product.js";
import UserCard from "./UserCard.jsx";
import Button from "./Button.jsx";
import TaskCard from "./Task.jsx";
import Saludar from "./Saludar.jsx";
import Posts from "./Posts.jsx";

const rootElement = document.getElementById("root");

const root = ReactDom.createRoot(rootElement);

const HandleChange = (e) => {
  console.log(e.target.value);
};

root.render(
  <>
    <Posts />
  </>
);
