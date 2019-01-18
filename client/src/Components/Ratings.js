import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./Ratings.css";
import Posts from "./Posts";
const raw = require("../data/data.json");
//console.log(raw);

class Ratings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.getJSONData()
    };
  }
  getJSONData() {
    let movies = [];
    let books = [];
    let things = [];
    let data = raw["data"];
    for (let item in data) {
      if (data[item].catagory === "Movie") {
        movies.push(data[item]);
      }
      if (data[item].catagory === "Book") {
        books.push(data[item]);
      }
      if (data[item].catagory === "Thing") {
        things.push(data[item]);
      }
    }
    //console.log(movies);
    return [movies, books, things];
  }
  logArrays() {
    console.log(this.movies);
  }

  compontDidMount() {
    this.setState({ data: this.getJSONData() });
    console.log(this.state.data);
  }

  render() {
    //console.log(this.state.data[1]);
    return (
      <div className="Ratings">
        <Route
          exact
          path="/"
          render={props => (
            <div>
              <h3>Choose a catagory to start!</h3>
            </div>
          )}
        />
        <Route
          exact
          path="/All"
          render={props => (
            <div>
              <Posts {...props} data={this.state.data[0]} />
              <Posts {...props} data={this.state.data[1]} />
              <Posts {...props} data={this.state.data[2]} />
            </div>
          )}
        />
        <Route
          exact
          path="/Movies"
          render={props => <Posts {...props} data={this.state.data[0]} />}
        />
        <Route
          exact
          path="/Things"
          render={props => <Posts {...props} data={this.state.data[2]} />}
        />
        <Route
          exact
          path="/Books"
          render={props => <Posts {...props} data={this.state.data[1]} />}
        />
      </div>
    );
  }
}

export default Ratings;
