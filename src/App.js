import React, { Component } from 'react';
import Game from './Game';
import Settings from './Settings';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);  
    this.updateState = this.updateState.bind(this);       

    this.state = {
      cards: [],
      players: [],
      playing: false        
    }
  }     

  updateState(data) {   
    this.setState(data) 
  }  

  render() {
      return (    
          <div>
            <Settings visible={!this.state.playing} updateState={this.updateState} />  
            <Game visible={this.state.playing} players={this.state.players} cards={this.state.cards} className="App" /> 
          </div>  
      );
  }
}

export default App;
