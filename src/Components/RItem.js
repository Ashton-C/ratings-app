import React, { Component } from 'react';
import './RItem.css';

class RItem extends Component {
  render() {
    return (
      <div className="RItem">
        <strong>
            <p id='top' className='Title'>{this.props.title}</p>
            <p id='top' className='Rating'>{this.props.rating}</p>
        </strong><br/>
        <p className='Description'>{this.props.description}</p>
      </div>
    );
  }
}

export default RItem;