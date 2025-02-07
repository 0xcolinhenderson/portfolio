import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const App = () => {
  return React.createElement(
    "div",
    null,
  );
};


const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(React.createElement(App));
