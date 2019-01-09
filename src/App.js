import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Catagory from "./Components/Catagory";
import Catagories from "./Components/Catagories";
import Ratings from "./Components/Ratings";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Catagories />
        <Ratings />
        <Footer />
      </div>
    );
  }
}

export default App;
