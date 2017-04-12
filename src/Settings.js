import React, {Component} from 'react';
import Helper from './Helpers';

export default class Settings extends Component {
  constructor(props) {
    super(props);    
    this.addPlayer = this.addPlayer.bind(this);  
    this.handleSubmit = this.handleSubmit.bind(this);   
    this.handleChange = this.handleChange.bind(this);
    this.addBookmark = this.addBookmark.bind(this);

    this.state = {      
      noOfPairs: 10, 
      players: [],
      currentPlayer: ''      
    }; 
  } 

  addBookmark () {   
    var settings = { noOfPairs: this.state.noOfPairs, players: this.state.players };   
    var queryString = Helper.setSettingsToQueryString(settings); 
    var newUri = window.location.href + '?' + queryString;
    window.open(newUri, '_blank');   
  }   

  handleSubmit () {   
    var settings = { noOfPairs: this.state.noOfPairs, players: this.state.players };    
    this.props.onSubmit(settings);
    event.preventDefault();
  }  

  handleChange(event) {    
    const value = event.target.value;
    const name = event.target.name;
    this.setState({[name]: value });        
  } 

  addPlayer(event){
    var newArray = this.state.players.slice();    
    newArray.push(this.state.currentPlayer);   
    this.setState({players:newArray}); 
    event.preventDefault();  
  }

  render() {  
    if (this.props.visible) {
      return (      
        <div className='Settings'>  
          { this.state.players.map((v,i) => { return (<div key={i}>{v}</div>); })}
          <div>
            <form onSubmit={this.handleSubmit}>
              <input name="noOfPairs" type="text" value={this.state.noOfPairs} onChange={this.handleChange} /> 
              <input name="currentPlayer" type="text" value={this.state.currentPlayer} onChange={this.handleChange} /> 
              <button onClick={this.addPlayer}>+</button>                             
              <input type="submit" value="Submit" />
            </form>           
            <button onClick={this.addBookmark}>Bookmark</button>  
          </div>
        </div>
      );      
    }

    return null;
  }
}
