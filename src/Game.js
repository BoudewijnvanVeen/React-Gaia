import React, {Component} from 'react';
import Card from './Card';
import Player from './Player';
import './Game.css';

export default class Game extends Component {
  constructor(props) {
    super(props);   
    this.checkMatch = this.checkMatch.bind(this);  

    this.state = { 
      locked: false, 
      cards: [], 
      players: [] 
    };     
  }

  componentWillReceiveProps(nextProps) {       
    this.setState({ 
      cards: nextProps.cards, 
      players: nextProps.players 
    }); 
  }    
 
  checkMatch(card) {

    if (this.state.locked) return;
    this.setState({ locked: true });   
    
    var byid = id => e => e.id === id;
    var isFlipped = e => e.flipped && !e.matched;         

    var cards = Object.assign([], this.state.cards);
    var players = Object.assign([], this.state.players);  
    var flippedCards = cards.filter(isFlipped);

    if (flippedCards.length === 0)    
        cards.find(byid(card.id)).flipped = true; 

    if (flippedCards.length === 1) {
      cards.find(byid(card.id)).flipped = true; 
      if ((cards.filter(isFlipped)[1]) && (cards.filter(isFlipped)[0].value === cards.filter(isFlipped)[1].value)) {
        cards.filter(isFlipped).forEach(c => c.matched = true);
        players[0].matched += 1;       
    }}

    if (flippedCards.length === 2) {
      cards.filter(isFlipped).forEach(c => c.flipped = false);
      players.push(players.shift()); 
    }   

    this.setState({ cards, players, locked: false });    
  }

  render() {  
    if (this.props.visible) {
      return (
        <div className='Game'>  
          <div className='Players'>      
            { this.state.players.map((player, index) => { return ( 
              <Player key={index} player={player} /> 
            );})}
          </div><div className='Cards'>  
            { this.state.cards.map((card, index) => { return (
              <Card key={index} card={card} checkMatch={this.checkMatch} />
            );})}
          </div>
        </div>
      );      
    }

    return null;
  }
}
