import React, { Component } from 'react'
import axios from 'axios'

const API_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle/'

class Deck extends Component {
  constructor(props) {
    super(props)

    this.state = {
      deck: null
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    // const newUrl = `https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/`
    // let response = await axios.get(url)
    // let cardImg = response.cards[0].image
    // console.log(cardImg)
  }

  async componentDidMount() {
    let deck = await axios.get(API_URL)

    this.setState({ deck: deck.data })
  }

  render() {
    return (
      <div>
        <h1>Deck</h1>
        <img src='' alt='' />
        <button onClick={this.handleClick}>New Card</button>
      </div>
    )
  }
}

export default Deck
