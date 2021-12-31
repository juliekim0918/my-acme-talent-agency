import React, { Component } from "react";

class Sidebar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className=" h-screen w-40  shadow-lg fixed ">
        <div className="flex flex-col py-20">
          <div className="p-4 border-b border-light-grey">Clients</div>
          <div className="p-4 border-b border-light-grey">Skills</div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
