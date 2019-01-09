import React, { Component } from 'react';
import './RItem.css';



class RItem extends Component {
  createBar = () => {
    let bar = [];
    for(let i=0; i<this.props.rating; i++) {
      bar.push(<div className='RatingNugget'></div>)
    }
    return bar;
  }
  render() {
    return (
      <div className="RItem">
        <strong>
            <p id='top' className='Title'>{this.props.title}</p>
            <p id='top' className='Rating'>{this.props.rating}/10</p>
        </strong><br/><br/>
        <div className='RatingBar'>{this.createBar()}</div>
        <p className='Description'>{this.props.description}</p>
      </div>
    );
  }
}

export default RItem;