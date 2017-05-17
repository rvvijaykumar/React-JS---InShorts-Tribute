import React, { Component } from 'react';

class CardFunctions extends Component {

  constructor(props) {
    super(props)
    this.state = {
      like: false,
      dislike: false
    };
    this.onLike = this.onLike.bind(this)
    this.onDisLike = this.onDisLike.bind(this)
  }

onLike() {
  
  let {like} = this.state
  this.setState ({
    like: !like
  })
}

onDisLike() {

  let {dislike} = this.state
  this.setState ({
    dislike: !dislike
  })
}

  render() {
    return (
      <div>
        <button onClick={this.onLike}> <span>{this.state.like ? 'LIKED': 'LIKE'}</span> </button> &nbsp;
        <button onClick={this.onDisLike}> <span>{this.state.dislike ? 'DISLIKED': 'DISLIKE'}</span> </button>
      </div>
    );
  }
}

export default CardFunctions;
