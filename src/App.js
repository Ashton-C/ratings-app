import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Catagory from "./Components/Catagory";
import Catagories from "./Components/Catagories";
import Ratings from "./Components/Ratings";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Catagories />
          <Ratings />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
