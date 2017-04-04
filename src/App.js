import React, { Component } from 'react';
import Game from './Game';
import Settings from './Settings';
import Helper from './Helpers';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);  
    this.settingsToState = this.settingsToState.bind(this);     

    this.state = {     
      cards: [],
      players: [],
      playing: false        
    }    
  }  

  componentDidMount() {
      var settings = Helper.getSettingsFromQueryString(this.props.params);
      if (settings) this.settingsToState(settings);
  }

  source() {
     return (["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]);
  }; 

  settingsToState(settings) { 
    var state = Helper.makeState(settings, this.source());
    this.setState(state);
    this.setState({playing: true});
  }  

  render() {    
      console.log(this.props.params);   
      return (    
          <div id="App">             
              <Settings visible={!this.state.playing} onSubmit={this.settingsToState} />                
              <Game visible={this.state.playing} players={this.state.players} cards={this.state.cards} className="App" />               
          </div>  
      );
  }
}

export default App;
