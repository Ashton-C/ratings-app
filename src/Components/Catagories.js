import React, { Component } from "react";
import Catagory from "./Catagory";

import "./Catagories.css";

class Catagories extends Component {
  render() {
    return (
      <div className="Catagories">
        <Catagory cat="All" />
        <Catagory cat="Movies" />
        <Catagory cat="Books" />
        <Catagory cat="Things" />
      </div>
    );
  }
}

export default Catagories;
