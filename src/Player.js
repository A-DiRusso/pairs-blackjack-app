import React, { Component } from 'react'
// import img from './img'

class Player extends Component {
  render() {
    return (
      <div>
        <h3>Hello, I'm the player.</h3>
        <h3>score: {this.props.player.score}</h3>
        <button onClick={() => {
              this.props.hit(this.props.playerNum)
            
        }}>HitMe</button>
        <button>Stay</button>

        {this.props.player.cards.map((card) => 
          <img className="playingcard" src={`./img/${card}.png`} />
          )}
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
