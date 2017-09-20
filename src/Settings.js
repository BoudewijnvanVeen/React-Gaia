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
    this.addBookmark = this.addBookmark.bind(this);

    this.state = {
      cardsSet: "0",
      noOfPairs: 10,
      players: [],
      currentPlayer: ''
    };
  }

  addBookmark() {
    var settings = { noOfPairs: this.state.noOfPairs, players: this.state.players };
    var queryString = Helper.setSettingsToQueryString(settings);
    var newUri = window.location.href + '?' + queryString;
    window.open(newUri, '_blank');
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
    if (this.props.visible) {
      return (
        <div className='Settings'>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div className='FormRow Selectlist'>
                <label className='Label'>Game: </label>
                {this.props.cardsSets.map((e, i) => {
                  return (
                    <div key={e.key}>
                      <span>{e.title}</span>
                      <input type="radio" name="cardsSet" value={i} checked={this.state.cardsSet === i.toString()} onChange={this.handleChange} />
                    </div>
                  )
                })
                }
              </div><div className='FormRow'>
                <label className='Label'>No of Pairs: </label>
                <input name="noOfPairs" size="4" type="text" value={this.state.noOfPairs} onChange={this.handleChange} />
              </div><div className='FormRow'>
                <label className='Label'>Add Player: </label>
                <input name="currentPlayer" type="text" value={this.state.currentPlayer} onChange={this.handleChange} />
                <button onClick={this.addPlayer}>+</button>
              </div>
              <input type="submit" value="Play..." />
              <button onClick={this.addBookmark}>Bookmark</button>
            </form>

          </div>
          <div className='ListOfPlayers'>
            Players:
            {this.state.players.map((v, i) => { return (<div key={i}>{v}</div>); })}
          </div>
        </div>
      );
    }

    return null;
  }
}
