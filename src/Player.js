import React, {Component} from 'react';
import './css/Player.css';

export default class Player extends Component {
  constructor(props) {
    super(props);    
  }  

  render() {       
    return (
      <div className='Player'>
        <div>{this.props.player.name}</div>
        <div>{this.props.player.matched}</div>
      </div>     
    );
  }
}