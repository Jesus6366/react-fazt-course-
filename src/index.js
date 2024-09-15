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

const users = [
  {
    id: 1,
    name: "Ryan Ray",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Joe",
    image: "https://robohash.org/user2",
  },
  {
    id: 3,
    name: "Marcos",
    image: "https://robohash.org/user3",
  },
];

root.render(
  <>
    {users.map((user, index) => {
      return (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <img src={user.image} />
        </div>
      );
    })}
  </>
);
