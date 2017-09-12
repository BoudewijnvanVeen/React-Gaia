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

    var display = <span>{this.props.card.value}</span>;
    if (this.props.card.type === "TextImg")
      display = <img src={"img/" + this.props.card.value + ".png"} height="150" width="150"></img>;
    if (this.props.card.type === "TextAudio")
      display = <audio id={this.props.card.value + "audio"} src={this.props.card.value + ".mp3"} type="audio/mpeg" />;

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