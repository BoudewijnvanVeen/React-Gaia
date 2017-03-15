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
      'Card',
      {'Card--flipped': this.props.card.flipped},
      {'Card--matched': this.props.card.matched}
    );
    var cardValue = (this.props.card.flipped && ! this.props.card.matched)? this.props.card.value : '';
    return (
      <div className={classes} onClick={this.handleClick}>
        {cardValue}
      </div>
    );
  }
}