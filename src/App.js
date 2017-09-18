import React, { Component } from 'react';
import Game from './Game';
import CardsSets from './data/CardsSets.json';
import Settings from './Settings';
import Helper from './Helpers';

import logo from './logo.svg';
import './css/App.css';

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
      if (this.props.params.length > 0) {
        var settings = Helper.getSettingsFromQueryString(this.props.params);
        if (settings) this.settingsToState(settings);
      }
  } 

  settingsToState(settings) { 
    var state = Helper.makeState(settings, CardsSets);
    this.setState(state);
    this.setState({playing: true});
  }  

  render() {          
      return (    
          <div id="App">             
              <Settings visible={!this.state.playing} onSubmit={this.settingsToState} cardsSets={CardsSets}/>                
              <Game visible={this.state.playing} players={this.state.players} cards={this.state.cards} className="App" />               
          </div>  
      );
  }
}

export default App;
