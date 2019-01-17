import React, { Component } from 'react';
import RItem from '../RItem';

class Things extends Component {
  render() {
    return (
      <div className="Things">
        <RItem title='Creality Ender 3' rating='8' 
        description='Amazing budget 3D printer, amazing quality after dialing in the settings, easy and fun to use!' />
      </div>
    );
  }
}

export default Things;