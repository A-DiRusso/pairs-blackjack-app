import React, { Component } from 'react'

class Dealer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
  render() {
    return (
      <div>
        <h3>Hello, I'm the dealer.</h3>
        <h3>score: {this.props.dealer.score}</h3>
        <button onClick={this.props.dealerhit}>HitMe</button>
        <button>Stay</button>
      <br />
        {this.props.dealer.cards.map((card,i) => 
          <img key={i} className="dealercard" src={`./img/${card}.png`} />
          )}
      </div>
    )
  }

}


export default Dealer;