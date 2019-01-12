import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Ratings.css';
import RItem from './RItem';
import Movies from './Movies';
import Books from './Books';
import Things from './Things';

class Ratings extends Component {
  render() {
    return (
      <div className="Ratings">
        <Route exact path="/" render={props => <div><h3>Choose a catagory to start!</h3></div>} />
        <Route exact path="/All" render={props => <div><Movies/><Books /><Things /></div>} />
        <Route exact path="/Movies" component={Movies} />
        <Route exact path="/Things" component={Things} />
        <Route exact path="/Books" component={Books} />
      </div>
    );
  }
}

export default Ratings;