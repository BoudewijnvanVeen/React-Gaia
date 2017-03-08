import React, {Component} from 'react';
import classnames from 'classnames';
import './Player.css';

export default class Player extends Component {
  constructor(props) {
    super(props);    
  }  

  render() {   
    var classes = classnames(
      'Player',
      {'Player--current': this.props.current}      
    );
    return (
      <div className={classes}>
        <div>{this.props.name}</div>
        <div>{this.props.matched}</div>
      </div>     
    );
  }
}