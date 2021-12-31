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
        <Sidebar />{" "}
        <div className="absolute top-0 right-0 left-0 ml-40 p-10">
          <div className="text-5xl font-semibold">Acme Talent Agency</div>
          <Switch>
            <Route
              path="/clients/:id"
              render={(props) => <Artists {...props} />}
            />
            <Route
              path="/clients"
              exact
              render={(props) => <Artists {...props} />}
            />
            <Route path="/" exact render={(props) => <Artists {...props} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Main;
