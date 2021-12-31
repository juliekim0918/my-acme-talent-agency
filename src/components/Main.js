import React, { Component } from "react";
import Sidebar from "./Sidebar";
import { Switch, Route } from "react-router-dom";
import Artists from "./Artists";
import Skills from "./Skills";

class Main extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="relative">
        <Sidebar />
        <div className="absolute top-0 right-0 left-0 md:ml-40 md:mt-0 p-10 mt-16">
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
            <Route
              path="/skills"
              exact
              render={(props) => <Skills {...props} />}
            />
            <Route path="/" exact render={(props) => <Artists {...props} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Main;
