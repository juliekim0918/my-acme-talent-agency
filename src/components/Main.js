import React, { Component } from "react";
import Sidebar from "./Sidebar";
import { Switch, Route } from "react-router-dom";
import Artists from "./Artists";

class Main extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="relative">
        <Sidebar />
        <Artists />
        {/* <Switch>
                <Route />
            </Switch> */}
      </div>
    );
  }
}

export default Main;
