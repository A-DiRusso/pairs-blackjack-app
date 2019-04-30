import React, { Component } from 'react'

class Player extends Component {
  render() {
    return (
      <div>
        <h3>Hello, I'm the player.</h3>
        <button onClick={() => {
              this.props.hit(this.props.playerNum)
        }}>HitMe</button>
        <button>Stay</button>
      </div>
    )
  }
componentDidMount() {
  //give them two cards
  this.props.hit(this.props.playerNum);
  this.props.hit(this.props.playerNum);
}

}

export default Player;
