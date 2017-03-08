import React, {Component} from 'react';
import Card from './Card';
import Player from './Player';
import './Game.css';

function initialCards() {
  return [
    {value: 2, matched: 0, flipped: false},
    {value: 4, matched: 0, flipped: false},
    {value: 1, matched: 0, flipped: false},
    {value: 1, matched: 0, flipped: false},
    {value: 3, matched: 0, flipped: false},
    {value: 4, matched: 0, flipped: false},
    {value: 2, matched: 0, flipped: false},
    {value: 3, matched: 0, flipped: false}
  ];
}

function initialPlayers() {
  return [
    {name: 'Gaia', matched: 0},
    {name: 'Boudewijn', matched: 0},
    {name: 'Mirjam', matched: 0}
  ];
}

export default class Game extends Component {
  constructor(props) {
    super(props);   
    this.checkMatch = this.checkMatch.bind(this);  

    this.state = {
      cards: initialCards(),
      players: initialPlayers(),
      currentPlayer: 0,
      lastCard: null,
      locked: false      
    };
  }

  checkMatch(value, id) {
    if (this.state.locked) return;

    var cards = this.state.cards;
    var players = this.state.players;
    var currentPlayer = this.state.currentPlayer;

    cards[id].flipped = true;
    this.setState({cards, locked: true});

    if (this.state.lastCard) {
      setTimeout(() => {
      if (value === this.state.lastCard.value) {        
        cards[id].matched = true;
        cards[this.state.lastCard.id].matched = true;
        players[currentPlayer].matched += 1;
        this.setState({cards, lastCard: null, locked: false });
      } else {        
        cards[id].flipped = false;
        cards[this.state.lastCard.id].flipped = false;
        this.setState({cards, lastCard: null, locked: false, currentPlayer: (currentPlayer === players.length-1)?0:currentPlayer+1});
       }}, 1000);
    } else {
      this.setState({
        lastCard: {id, value},
        locked: false       
      });
    }      
  }

  render() {  
    return (
      <div className='Game'>  
        <div className='Players'>      
          { this.state.players.map((player, index) => { return ( 
            <Player key={index} matched={player.matched} name={player.name} current={index===this.state.currentPlayer} /> 
          );})}
        </div><div className='Cards'>  
          { this.state.cards.map((card, index) => { return (
            <Card key={index} value={card.value} id={index} matched={card.matched} flipped={card.flipped} checkMatch={this.checkMatch} />
          );})}
        </div>
      </div>
    );
  }
}
