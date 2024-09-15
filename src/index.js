import React, { useState, useEffect } from "react";
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

const Counter = () => {
  const [message, setMessage] = useState();
  const [counter, setCounter] = useState(0);

  const messageFunction = () => {
    alert(message);
  };

  useEffect(() => {
    console.log("render");
  }, [counter]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button onClick={messageFunction}>Save</button>
      <hr />

      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter((counter) => counter + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
};

root.render(
  <>
    <Counter />
  </>
);
