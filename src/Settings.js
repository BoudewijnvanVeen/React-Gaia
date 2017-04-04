import React, {Component} from 'react';
import Helper from './Helpers';

export default class Settings extends Component {
  constructor(props) {
    super(props);    
    this.updateState = this.submit.bind(this);  
    this.handleSubmit = this.handleSubmit.bind(this);   
    this.handleChange = this.handleChange.bind(this);

    this.state = {      
      noOfPairs: 10, 
      players: [],
      value: ''
    }; 
  }  

  submit () {   
    var settings = { noOfPairs: this.state.noOfPairs, players: this.state.players };
    //Helper.setSettingsToQueryString(settings);
    this.props.onSubmit(settings)
  }  

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    var newArray = this.state.players.slice();    
    newArray.push(this.state.value);   
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
              <input type="text" value={this.state.value} onChange={this.handleChange} />             
              <input type="submit" value="+" />
            </form>
            <button onClick={this.updateState}>Play!</button>            
          </div>
        </div>
      );      
    }

    return null;
  }
}
