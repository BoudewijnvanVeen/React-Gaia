import React, { Component } from 'react';
import CardsSets from './data/CardsSets.json';
import Helper from './Helpers';
import './css/Settings.css';

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.addPlayer = this.addPlayer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);    

    this.state = {
      cardsSet: "0",
      noOfPairs: 10,
      players: [],
      currentPlayer: ''
    };
  }

  handleSubmit() {
    var settings = { cardsSet: this.state.cardsSet, noOfPairs: this.state.noOfPairs, players: this.state.players };
    if (this.state.players.length > 0)
      this.props.onSubmit(settings);
    window.event.preventDefault();
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  }

  addPlayer(event) {
    var newArray = this.state.players.slice();
    newArray.push(this.state.currentPlayer);
    this.setState({ players: newArray });
    event.preventDefault();
  }

  render() {   
    return (
      <div className='Settings'>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className='FormRow Selectlist'>              
              { this.props.cardsSets.map((e, i) => {
                const className = (this.state.cardsSet === i.toString())?"active":"";
                return (
                  <button key={e.key} name="cardsSet" type="button" value={i} className={className} onClick={this.handleChange}>
                    {e.title}
                  </button>                  
                )
              })}
            </div><div className='FormRow'>
              <label className='Label'>No of Pairs: </label>
              <input name="noOfPairs" size="4" type="text" value={this.state.noOfPairs} onChange={this.handleChange} />
            </div><div className='FormRow'>
              <label className='Label'>Add Player: </label>
              <input name="currentPlayer" type="text" value={this.state.currentPlayer} onChange={this.handleChange} />
              <button onClick={this.addPlayer}>+</button>
            </div>
            <input type="submit" value="Play..." />
          </form>

        </div>
        <div className='ListOfPlayers'>
          Players:
            {this.state.players.map((v, i) => { return (<div key={i}>{v}</div>); })}
        </div>
      </div>
    );
  }
}
