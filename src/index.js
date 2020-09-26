import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css"

ReactDOM.render(
  <div>
    <App />
    <footer className="text-center">
      <p className="text-center">Made by Manish Kumar Sahu</p>
      <p className="text-center">@ 2020</p>
      <a href="https://github.com/t-rex777">
          <i className="fa-2x fab fa-github footer-icons mx-3"></i>
        </a>
        <a href="https://www.facebook.com/lionelmanish1408">
          <i className="fa-2x fab fa-facebook footer-icons mx-3"></i>
        </a>
        <a href="https://www.instagram.com/_kidding_me__/">
          <i className="fa-2x fab fa-instagram footer-icons mx-3"></i>
        </a>

    </footer>
  </div>,
  document.getElementById("root")
);
