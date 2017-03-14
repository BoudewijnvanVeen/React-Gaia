import React, {Component} from 'react';

export default class Settings extends Component {
  constructor(props) {
    super(props);    
    this.updateState = this.updateState.bind(this);    
  }

  updateState () {
      var data = {
        'cards': [
          {value: 2, matched: 0, flipped: false},
          {value: 4, matched: 0, flipped: false},
          {value: 1, matched: 0, flipped: false},
          {value: 1, matched: 0, flipped: false},
          {value: 3, matched: 0, flipped: false},
          {value: 4, matched: 0, flipped: false},
          {value: 2, matched: 0, flipped: false},
          {value: 3, matched: 0, flipped: false}],
        'players': [
          {name: 'Gaia', matched: 0, current: false},
          {name: 'Boudewijn', matched: 0, current: false},
          {name: 'Mirjam', matched: 0, current: false}],
        'playing': true
      }

      this.props.updateState(data)
  }

  render() {  
    if (this.props.visible) {
      return (      
        <div className='Settings'>  
          <button onClick={this.updateState}>Click me</button>
        </div>
      );      
    }

    return null;
  }
}
