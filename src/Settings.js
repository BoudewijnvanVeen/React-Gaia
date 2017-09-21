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
    const name = event.target.id;
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
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <ul className="flex-outer">
            <li>
              <label for="noOfPairs">Selecteer een spel</label>
              <div  className="flex-container">
                {this.props.cardsSets.map((e, i) => {
                  const className = (this.state.cardsSet === i.toString()) ? "active" : "";
                  return (
                    <button key={e.key} id="cardsSet" type="button" value={i} className={className} onClick={this.handleChange} >
                      {e.title}
                    </button>
                  )
                })}
              </div>
            </li>
            <li>
              <label for="noOfPairs">Aantal paren</label>
              <input id="noOfPairs" name="noOfPairs" type="text" value={this.state.noOfPairs} onChange={this.handleChange} />
            </li>
            <li>
              <label for="currentPlayer">Voeg speler toe</label>
              <input id="currentPlayer" type="text" value={this.state.currentPlayer} onChange={this.handleChange} />
              <button onClick={this.addPlayer}>+</button>
            </li>
            <li>
              <label for="noOfPairs">Spelers</label>
              <div>
                {this.state.players.map((v, i) => { return (<div key={i}>{v}</div>); })}
              </div>
            </li>
            <li>
              <button type="submit">Spelen</button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}
