import React, { Component } from "react";
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>My Dope Ratings</h1>
        <p>
          I use this site to rate stuff, good, bad, movies, books, pretty much
          what ever I feel like that day... This site is created with React and
          it's primary purpose to act as a skill building project.
        </p>
      </div>
    );
  }
}

export default Header;
