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
    this.submitSettings = this.submitSettings.bind(this);
    this.resetSettings = this.resetSettings.bind(this);

    this.state = {
      cards: [],
      players: [],
      playing: false
    }
  }

  componentDidMount() {    
    var settings = Helper.getSettingsFromLocalStorage(this.props.params);
    if (settings) this.settingsToState(settings);
  }

  submitSettings(settings) {
    Helper.setSettingsToLocalStorage(settings);
    this.settingsToState(settings);
  }

  resetSettings() {
    Helper.removeSettingsFromLocalStorage();
    this.setState({ playing: false });
  }

  settingsToState(settings) {
    var state = Helper.makeState(settings, CardsSets);
    this.setState(state);
    this.setState({ playing: true });
  }

  render() {
    const isPlaying = this.state.playing;
    return (
      <div id="App">
        { isPlaying ? (
          <Game players={this.state.players} cards={this.state.cards} onReset={this.resetSettings} className="App" />
        ) : (
          <Settings onSubmit={this.submitSettings} cardsSets={CardsSets} />
        )}
      </div>
    );
  }
}

export default App;
