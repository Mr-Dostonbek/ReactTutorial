import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/style.css'

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  , document.getElementById("root"));