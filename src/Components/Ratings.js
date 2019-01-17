import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./Ratings.css";
import RItem from "./RItem";
import Movies from "./Routes/Movies";
import Books from "./Routes/Books";
import Things from "./Routes/Things";
const raw = require("../data/data.json");

class Ratings extends Component {
  getJSONData() {
    let movies = [];
    let books = [];
    let things = [];
    let data = JSON.parse(raw);
    for (let item in data.data) {
      if (item.catagory === "Movie") {
        movies.push(item);
      }
      if (item.catagory === "Book") {
        books.push(item);
      }
      if (item.catagory === "Thing") {
        things.push(item);
      }
    }
    return movies && books && things;
  }
  render() {
    this.getJSONData();
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
              <Movies data={this.movies} />
              <Books data={this.books} />
              <Things data={this.things} />
            </div>
          )}
        />
        <Route
          exact
          path="/Movies"
          render={() => <Posts data={this.movies} />}
        />
        <Route
          exact
          path="/Things"
          render={() => <Posts data={this.things} />}
        />
        <Route exact path="/Books" render={() => <Posts data={this.books} />} />
      </div>
    );
  }
}

export default Ratings;
