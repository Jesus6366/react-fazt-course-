import React from "react";
import ReactDom from "react-dom";

const rootElement = document.getElementById("root");

const root = ReactDom.createRoot(rootElement);

root.render(<h1>Hello World</h1>);
