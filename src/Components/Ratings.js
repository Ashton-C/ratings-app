import React, { Component } from 'react';
import './Ratings.css';
import RItem from './RItem';

class Ratings extends Component {
  render() {
    return (
      <div className="Ratings">
        <RItem title='Spiderman: Into the Spiderverse' rating='5/7' 
        description='Best spiderman movie I have seen to date... Amazing animation, fantastic story, great humor...' />
      </div>
    );
  }
}

export default Ratings;