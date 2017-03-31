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

  

  updateState () {
      var data = {
        'cards': this.getCards(this.state.noOfCards),
        'players':this.getPlayers(),
        'playing': true
      }

      this.props.updateState(data)
  }

  serialize = function(obj) {    
    Object.keys(obj).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');
  }

  deserialize = function(querystring) {
    /* window.location.search
    return str.split("&").reduce(function(prev, curr, i, arr) {
      var p = curr.split("=");
      prev[decodeURIComponent(p[0])] = decodeURIComponent(p[1]);
      return prev;
    }, {});
    */
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
