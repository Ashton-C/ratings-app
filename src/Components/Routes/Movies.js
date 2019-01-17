import React, { Component } from 'react';
import RItem from '../RItem';

class Movies extends Component {
  render() {
    return (
      <div className="Movies">
        <RItem title='Spiderman: Into the Spiderverse' rating='10' 
        description='Best spiderman movie I have seen to date... Amazing animation, fantastic story, great humor...' />
        <RItem title='Aquaman' rating='7' 
        description='Was honestly pretty bad, but it made me laugh alot, so it gets a 7.' />
      </div>
    );
  }
}

export default Movies;