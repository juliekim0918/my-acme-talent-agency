import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="md:h-screen md:w-40 w-screen shadow-lg fixed z-10 bg-white px-5">
        <div className="flex md:flex-col md:pt-10 flex-row items-center">
          <Link to="/">
            <img src="/logo.png" className="w-20 md:mb-10" alt="" />
          </Link>
          <Link to="/clients">
            <div className="p-4 md:border-b md:border-light-grey flex items-center">
              Clients
            </div>
          </Link>
          <Link to="/skills">
            <div className="p-4 md:border-b md:border-light-grey">Skills</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Sidebar;
