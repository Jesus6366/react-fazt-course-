import React from "react";
import ReactDom from "react-dom/client";
import Greeting from "./Greeting.jsx";
import Product from "./Product.js";
import UserCard from "./UserCard.jsx";
import Button from "./Button.jsx";

const rootElement = document.getElementById("root");

const root = ReactDom.createRoot(rootElement);

root.render(
  <>
    <Button text="Click Me" />
    <Button text="Pay" />
    <Button text="Go To" />

    {/* <Greeting title="Hola mundo" name="Jesus" />
    <Greeting title="Hola React" name="JOSE" />
    <Greeting title="Hola JSX" />
    <Greeting title="Hola Sarai" />
    <Greeting title="Hola" />

    <UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 Main Street", city: "Newy York" }}
      greet={function () {
        alert("Hello");
      }}
    />

    <UserCard
      name="Joe MCmillanb"
      amount={1000}
      married={false}
      points={[100, 20]}
      address={{ street: "123 av some", city: "New York" }}
    /> */}
  </>
);
