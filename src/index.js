import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "./styles/style.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";

import NavBar from "./components/navBar";
import MainPage from "./components/mainPage";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <MainPage />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
