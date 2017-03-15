import React, {Component} from 'react';

export default class Settings extends Component {
  constructor(props) {
    super(props);    
    this.updateState = this.updateState.bind(this);    
  }

  updateState () {
      var data = {
        'cards': [
          {id: 'c1', value: 2, matched: 0, flipped: false},
          {id: 'c2', value: 4, matched: 0, flipped: false},
          {id: 'c3', value: 1, matched: 0, flipped: false},
          {id: 'c4', value: 1, matched: 0, flipped: false},
          {id: 'c5', value: 3, matched: 0, flipped: false},
          {id: 'c6', value: 4, matched: 0, flipped: false},
          {id: 'c7', value: 2, matched: 0, flipped: false},
          {id: 'c8', value: 3, matched: 0, flipped: false}],
        'players': [
          {id: 'p1', name: 'Gaia', matched: 0, current: false},
          {id: 'p2', name: 'Boudewijn', matched: 0, current: false},
          {id: 'p3', name: 'Mirjam', matched: 0, current: false}],
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
