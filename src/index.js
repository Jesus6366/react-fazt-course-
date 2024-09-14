import React from "react";
import ReactDom from "react-dom/client";
import Greeting from "./Greeting.jsx";
import Product from "./Product.js";
import UserCard from "./UserCard.jsx";
import Button from "./Button.jsx";
import TaskCard from "./Task.jsx";
import Saludar from "./Saludar.jsx";

const rootElement = document.getElementById("root");

const root = ReactDom.createRoot(rootElement);

const HandleChange = (e) => {
  console.log(e.target.value);
};

root.render(
  <>
    <Saludar />
    <TaskCard ready={false} />
    <Button text="Click Me" />
    <Button text="Pay" />
    <Button text="Go To" />

    <input
      onChange={HandleChange}
      onDoubleClick={() => console.log("Double Click")}
    />

    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Sending data");
      }}
    >
      <h1>Registro de evento</h1>
      <button>Send</button>
    </form>

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
