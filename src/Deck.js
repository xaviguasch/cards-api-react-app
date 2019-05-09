import React, { Component } from 'react'
import Card from './Card'
import './Deck.css'
import axios from 'axios'

const API_BASE = 'https://deckofcardsapi.com/api/deck'

class Deck extends Component {
  constructor(props) {
    super(props)

    this.state = {
      deck: null,
      drawn: []
    }
    this.getCard = this.getCard.bind(this)
  }

  async getCard() {
    let deck_id = this.state.deck.deck_id
    try {
      let cardUrl = `${API_BASE}/${deck_id}/draw/`
      let cardRes = await axios.get(cardUrl)

      if (!cardRes.data.success) {
        throw new Error('No card remaining')
      }
      let card = cardRes.data.cards[0]

      this.setState(st => ({
        drawn: [
          ...st.drawn,
          { id: card.code, image: card.image, name: `${card.value} of ${card.suit}` }
        ]
      }))
    } catch (err) {
      alert(err)
    }
  }

  async componentDidMount() {
    let deck = await axios.get(`${API_BASE}/new/shuffle/`)

    this.setState({ deck: deck.data })
  }

  render() {
    const cards = this.state.drawn.map(c => <Card image={c.image} name={c.name} key={c.id} />)

    return (
      <div className='Deck'>
        <h1 className='Deck-title'>♦ Card Dealer ♦</h1>
        <h2 className='Deck-title subtitle'>♦ A little demo made with React ♦</h2>
        <button className='Deck-btn' onClick={this.getCard}>
          Get Card
        </button>
        <div className='Deck-cardarea'>{cards}</div>
      </div>
    )
  }
}

export default Deck
