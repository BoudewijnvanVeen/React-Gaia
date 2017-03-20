import React, {Component} from 'react';

export default class Settings extends Component {
  constructor(props) {
    super(props);    
    this.updateState = this.updateState.bind(this);    
  }

  scramble(array) {
      return array.reduceRight((pv,cv,i,arr) => {    
        var random = Math.floor(Math.random() * arr.length);
        pv.push(arr.splice(random, 1)[0]);    
        return pv;
      },[]);  
  }

  getCards(n) { 
    var arr1 = this.scramble(this.props.source).slice(0, n);;
    var arr3 = arr1.reduce((pv,cv,i,arr) => {
      pv.push(
          {id: i, value: cv, matched: false, flipped: false},
          {id: arr.length + i, value: cv, matched: false, flipped: false}
      );
      return pv;
    },[])

    return this.scramble(arr3);
  }

  updateState () {
      var data = {
        'cards': this.getCards(2),
        'players': [
          {id: 'p1', name: 'Gaia', matched: 0 },
          {id: 'p2', name: 'Boudewijn', matched: 0 },
          {id: 'p3', name: 'Mirjam', matched: 0 }],
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
