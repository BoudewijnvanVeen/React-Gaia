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

  checkMatch(value, id) {
    if (this.state.locked) return;

    this.setState({ locked: true });    

    var cards = this.state.cards;
    cards[id].flipped = true; 

    var players = this.state.players;
    var currentPlayer = players.find(p => p.current === true);
    var flippedCards = cards.filter(c => c.flipped === true);  

    if (flippedCards.length === 2) {      
      setTimeout(() => {
        if (flippedCards[0].value === flippedCards[1].value) {        
          cards[flippedCards[0].id].matched = true;
          cards[flippedCards[1].id].matched = true;
          players[currentPlayer.id].matched += 1;
          this.setState({cards, players});
        } else {        
          cards.filter(c => c.flipped === true).map(c => c.flipped = false);
          players[currentPlayer.id].current = false;
          players[currentPlayer.id+1].current = true;
          this.setState({cards, players});
        }
      }, 1000);
    } 

    this.setState({ locked: false });    
  }

  render() {  
    if (this.props.visible) {
      return (
        <div className='Game'>  
          <div className='Players'>      
            { this.state.players.map((player, index) => { return ( 
              <Player key={index} id={index} player={player} /> 
            );})}
          </div><div className='Cards'>  
            { this.state.cards.map((card, index) => { return (
              <Card key={index} id={index} card={card} checkMatch={this.checkMatch} />
            );})}
          </div>
        </div>
      );      
    }

    return null;
  }
}
