import React, {Component} from 'react';
import classnames from 'classnames';
import './Card.css';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (!this.props.card.flipped) {
      this.props.checkMatch(this.props.card);
    }
  }

  render() {
    var classes = classnames(
      'flip-container',
      {'flip': this.props.card.flipped},
      {'matched': this.props.card.matched}
    );
    
    return (      
      <div className="flip-container" className={classes} onClick={this.handleClick}>
        <div className="flipper">
          <div className="front">
            Gaia
          </div>
          <div className="back">
            {this.props.card.value}
          </div>
        </div>
      </div>
    );
  }
}