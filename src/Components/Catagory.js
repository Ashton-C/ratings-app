import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Catagory.css";

class Catagory extends Component {
  render() {
    return (
      <NavLink className="Catagory" exact to={this.props.cat}>
        {this.props.cat}
      </NavLink>
    );
  }
}

export default Catagory;
