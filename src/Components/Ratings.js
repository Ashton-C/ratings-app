import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Ratings.css';
import RItem from './RItem';

class Ratings extends Component {
  render() {
    return (
      <div className="Ratings">
        <RItem title='Spiderman: Into the Spiderverse' rating='10' 
        description='Best spiderman movie I have seen to date... Amazing animation, fantastic story, great humor...' />
        <RItem title='Aquaman' rating='7' 
        description='Was honestly pretty bad, but it made me laugh alot, so it gets a 7.' />
        <RItem title='Creality Ender 3' rating='8' 
        description='Amazing budget 3D printer, amazing quality after dialing in the settings, easy and fun to use!' />
        <RItem title='Spiderman: Into the Spiderverse' rating='5' 
        description='Best spiderman movie I have seen to date... Amazing animation, fantastic story, great humor...' />
        <RItem title='Aquaman' rating='4' 
        description='Was honestly pretty bad, but it made me laugh alot, so it gets a 7.' />
        <RItem title='Creality Ender 3' rating='1' 
        description='Amazing budget 3D printer, amazing quality after dialing in the settings, easy and fun to use!' />
      </div>
    );
  }
}

export default Ratings;