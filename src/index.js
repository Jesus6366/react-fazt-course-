import React from "react";
import ReactDom from "react-dom";
import Greeting from "./Greeting.js";
import Product from "./Product.js";

const rootElement = document.getElementById("root");

const root = ReactDom.createRoot(rootElement);

root.render(
  <>
    <Greeting />
    <Product />
  </>
);
