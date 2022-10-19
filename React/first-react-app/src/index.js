import React from "react";
import ReactDOM from "react-dom";

const elem = <h1>Hello World</h1>;
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(elem);
