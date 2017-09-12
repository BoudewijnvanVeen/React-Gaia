import React, {Component} from 'react';
import classnames from 'classnames';
import './Card.css';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {    
    this.props.checkMatch(this.props.card);    
  }

  render() {
    var classes = classnames(
      'flip-container',
      {'flip': this.props.card.flipped},
      {'matched': this.props.card.matched}
    );

    var display = this.props.card.value;
    if (this.props.card.type === "TextImg")
      display = <img src={this.props.card.value + ".png"}></img>;
    if (this.props.card.type === "TextAudio")
      display = <audio controls><source src={this.props.card.value + ".mp3"} type="audio/mpeg" /></audio>;

    return (      
      <div className="flip-container" className={classes} onTouchEnter={this.handleClick} onClick={this.handleClick}>
        <div className="flipper">
          <div className="front"></div>
          <div className="back">{display}</div>
        </div>
      </div>
    );
  }
}