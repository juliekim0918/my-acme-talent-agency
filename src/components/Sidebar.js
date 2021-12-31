import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className=" h-screen w-40  shadow-lg fixed ">
        <div className="flex flex-col pt-10">
          <Link to="/">
            <img src="/logo.png" className="w-20 mb-10" alt="" />
          </Link>
          <Link to="/clients">
            <div className="p-4 border-b border-light-grey">Clients</div>
          </Link>
          <Link to="/skills">
            <div className="p-4 border-b border-light-grey">Skills</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Sidebar;
