import { render } from "react-dom";
import Main from "./components/Main";
import { Provider } from "react-redux";
import React, { Component } from "react";
import store from "./store/";
const root = document.querySelector("#root");
import "./input.css";
import { BrowserRouter as Router } from "react-router-dom";

render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  root
);
