import React from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard';
import './components/MemoryCard.css'

function generateDeck() {
  const symbols = ['∆', 'ß', '£', '§',' •', '$', '+', 'ø'];
  const deck = [];

  for (let index = 0; index < 16; index++) {
    deck.push({
      isFlipped: false,
      symbol: symbols[index % 8]
    });
  }
  return shuffle(deck)
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      deck: generateDeck(),
      pickedCards: []
    }
  }

  pickCard = (cardIndex) => {
    const cardToFlip = {...this.state.deck[cardIndex]}
    if (cardToFlip.isFlipped) {
      return
    }
    cardToFlip.isFlipped = true

    let newPickedCards = [...this.state.pickedCards, cardIndex];
    const newDeck =  this.state.deck.map((card, index) => {
      if (cardIndex === index) {
        return cardToFlip
      }
      return card
    })
    if(newPickedCards.length === 2) {
      const firstCard = newDeck[newPickedCards[0]];
      const secondCard = newDeck[newPickedCards[1]];
      if (firstCard.symbol !== secondCard.symbol) {
        setTimeout(() => {this.unflipCard(newPickedCards[0], newPickedCards[1])}, 1000)
      }
      newPickedCards = []
      
    }
    this.setState({
      deck: newDeck, 
      pickedCards: newPickedCards
    })
  }

  unflipCard = (card1Index,  card2Index) => {
    let card1 = {...this.state.deck[card1Index]};
    let card2 = {...this.state.deck[card2Index]};

    card1.isFlipped = false
    card2.isFlipped = false
    

    let newDeck =  this.state.deck.map((card, index) => {
      if(index === card1Index) {
        return card1
      }
      if(index === card2Index) {
        return card2
      }
      return card
    })

    this.setState({
      deck: newDeck
    })

  }

  render() {
    const cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard symbol={card.symbol} isFlipped={card.isFlipped} 
      key={index} clickHandler = {() => this.pickCard(index)} />
    });

    return (
      <div className="App">
        <h1 className="App-header">Memory Game</h1>
        <h3 className="subtitle">Match Cards To Win</h3>
        <div>
          {cardsJSX.slice(0,4)}
        </div>
        <div>
          {cardsJSX.slice(4,8)}
        </div>
        <div>
          {cardsJSX.slice(8,12)}
        </div>
        <div>
          {cardsJSX.slice(12,16)}
        </div>
      </div>
    
    )
  
  }
}

export default App;
