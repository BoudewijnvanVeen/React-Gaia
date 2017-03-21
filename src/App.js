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

  source() {
     return (["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]);
  }; 

  updateState(data) {   
    this.setState(data) 
  }  

  render() {
      return (    
          <div id="App">
            <Settings visible={!this.state.playing} updateState={this.updateState} source={this.source()} />  
            <Game visible={this.state.playing} players={this.state.players} cards={this.state.cards} className="App" /> 
          </div>  
      );
  }
}

export default App;
