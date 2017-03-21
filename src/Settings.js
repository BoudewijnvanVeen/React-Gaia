import React, {Component} from 'react';

export default class Settings extends Component {
  constructor(props) {
    super(props);    
    this.updateState = this.updateState.bind(this);  
    this.handleSubmit = this.handleSubmit.bind(this);   
    this.handleChange = this.handleChange.bind(this);

    this.state = {      
      noOfCards: 10, 
      players: [],
      value: ''
    }; 
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

  getPlayers() {    
    return this.state.players.map((v,i) => { return ( {id: i, name: v, matched: 0 })});      
  }

  updateState () {
      var data = {
        'cards': this.getCards(this.state.noOfCards),
        'players':this.getPlayers(),
        'playing': true
      }

      this.props.updateState(data)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    var newArray = this.state.players.slice();    
    newArray.push(this.state.value);   
    this.setState({players:newArray});
    event.preventDefault();
  }

  render() {  
    if (this.props.visible) {
      return (      
        <div className='Settings'>  
          { this.state.players.map((v,i) => { return (<div key={i}>{v}</div>); })}
          <div>
            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.value} onChange={this.handleChange} />             
              <input type="submit" value="+" />
            </form>
            <button onClick={this.updateState}>Play!</button>
          </div>
        </div>
      );      
    }

    return null;
  }
}
