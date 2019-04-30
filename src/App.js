import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dealer from './Dealer'
import Player from './Player'

const carddeck = {"AH":11,"KH":10,"QH":10,"JH":10,"10H":10,"9H":9,"8H":8,"7H":7,"6H":6,"5H":5,"4H":4,"3H":3,"2H":2, 
"AD":11,"KD":10,"QD":10,"JD":10,"10D":10,"9D":9,"8D":8,"7D":7,"6D":6,"5D":5,"4D":4,"3D":3,"2D":2,
"AS":11,"KS":10,"QS":10,"JS":10,"10S":10,"9S":9,"8S":8,"7S":7,"6S":6,"5S":5,"4S":4,"3S":3,"2S":2,
"AC":11,"KC":10,"QC":10,"JC":10,"10C":10,"9C":9,"8C":8,"7C":7,"6C":6,"5C":5,"4C":4,"3C":3,"2C":2
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.deck = ["AH","KH","QH","JH","10H","9H","8H","7H","6H","5H","4H","3H","2H",
    "AD","KD","QD","JD","10D","9D","8D","7D","6D","5D","4D","3D","2D",
    "AS","KS","QS","JS","10S","9S","8S","7S","6S","5S","4S","3S","2S",
    "AC","KC","QC","JC","10C","9C","8C","7C","6C","5C","4C","3C","2C"];

    this.state={
      carddeck:{"AH":11,"KH":10,"QH":10,"JH":10,"10H":10,"9H":9,"8H":8,"7H":7,"6H":6,"5H":5,"4H":4,"3H":3,"2H":2, 
      "AD":11,"KD":10,"QD":10,"JD":10,"10D":10,"9D":9,"8D":8,"7D":7,"6D":6,"5D":5,"4D":4,"3D":3,"2D":2,
      "AS":11,"KS":10,"QS":10,"JS":10,"10S":10,"9S":9,"8S":8,"7S":7,"6S":6,"5S":5,"4S":4,"3S":3,"2S":2,
      "AC":11,"KC":10,"QC":10,"JC":10,"10C":10,"9C":9,"8C":8,"7C":7,"6C":6,"5C":5,"4C":4,"3C":3,"2C":2
      },
      arrayCardsLeft:[...this.deck,...this.deck,...this.deck,...this.deck,
                      ...this.deck,...this.deck,...this.deck,...this.deck],
      dealer:{cards:[],score:0},
      gameover:false,
      players:[
        {playerNum: 0,
          playing:true,
                cards:[],
                score:0},
        {playerNum: 1,
          playing:false,
          cards:[],
          score:0},
        {playerNum: 2,
          playing:true,
          cards:[],
          score:0},
        {playerNum: 3,
          playing:false,
          cards:[],
          score:0}    
      ]
  }
}



  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <Dealer hit={this._hit} dealer={this.state.dealer} dealerhit={this._dealerhit}/>

<div className="playersgrid" >
          {this.state.players.map((player) => (
            
            player.playing  ?
            <Player key={player.playerNum} score={player.score} 
            hit={this._hit} 
            playerNum={player.playerNum}
            player={player}
            />
            : null
          ))}
</div>
        </header>
      </div>
    )
  }
  componentDidMount() {
    
this._dealerhit();
this._dealerhit();

    //then pass those values through
  }

  _hit = (playerNum) => {
    //select random from arrayOfCardsLeft
    let random = parseInt(Math.random()*this.state.arrayCardsLeft.length);
    let newcard = this.state.arrayCardsLeft[random]
    //remove from arrayOfCards
    let tempArray = this.state.arrayCardsLeft
    tempArray.splice(random,1);

    //add to player cards[]
   let tempPlayers = this.state.players
  //  console.log(tempPlayers);
    tempPlayers[playerNum].cards=[...tempPlayers[playerNum].cards.concat(newcard)]

    //update the score with each card:
  //   let newScore = 0;
  //  tempPlayers[playerNum].cards.forEach((card) => {
  //   newScore  += this.state.carddeck[card]
  //  })
   tempPlayers[playerNum].score = score(tempPlayers[playerNum].cards)
   
   //update setState
    this.setState({
      arrayCardsLeft:tempArray,
      players:tempPlayers
    })
      }

_dealerhit = () => {
  //set the dealer
  let random = parseInt(Math.random()*this.state.arrayCardsLeft.length);
  let newcard = this.state.arrayCardsLeft[random]
  //remove from arrayOfCards
  let tempArray = this.state.arrayCardsLeft
  tempArray.splice(random,1);

  //add to player cards[]
 let tempDealer = this.state.dealer
//  console.log(tempPlayers);
  tempDealer.cards=this.state.dealer.cards.concat(newcard)

  //update the score with each card:
//   let newScore = 0;
//  tempDealer.cards.forEach((card) => {
//   newScore  += this.state.carddeck[card]
//  })
 tempDealer.score = score(tempDealer.cards) //call this._score
 
 //update setState
  this.setState({
    arrayCardsLeft:tempArray,
    dealer:tempDealer
  })
}

// _score = (cards) => {
//   // let scoreArray = []
//   let newScore = 0;
//   cards.forEach((card) =>  {
//     newScore  += this.state.carddeck[card]
//   }
//   return newScore;
// }
}

function score(cards) {
  let newScore = 0;
  cards.forEach((card) =>  {
    newScore  += carddeck[card]
  })
  return newScore;

}
export default App;
