import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchDisplay from '../components/SearchDisplay.jsx'
import Card from '../components/Card.jsx'
import * as actions from '../actions/actions.js'
import DeckDisplay from '../components/DeckDisplay.jsx';
import DeckCardDisplay from '../components/DeckCardDisplay.jsx'
const scryfall = require("scryfall-client");

const mapStateToProps = state => ({
    collection: state.collection.collection,
    deck_collection: state.collection.deck_collection,
    deck_mode: state.collection.deck_mode,
    decks: state.collection.decks,
    deck_loaded: state.collection.deck_loaded,
});

const mapDispatchToProps = dispatch => ({
    moveFromDeckToColl: (card) => {
        console.log("MOVING CARD FROM DECK TO COLL")
        // remove card from collection
        dispatch(actions.addCardToDeckCollection(card))
        dispatch(actions.deleteCardFromDeck(card))
    }
});

class DeckCardContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let deckList = []

        // deck list
        if (this.props.deck_loaded !== -1) {
            const deckName = <h1>{this.props.decks[this.props.deck_loaded].name}</h1>
            deckList.push(deckName)
            for (const [key, val] of Object.entries(this.props.decks[this.props.deck_loaded].cardList)) {
                let newCard = <DeckCardDisplay key={val.card.id} card={val}
                    moveFromDeckToColl={this.props.moveFromDeckToColl}
                    deckId={this.props.deck_loaded}
                    deck_mode={this.props.deck_mode}></DeckCardDisplay>
                deckList.push(newCard);
            }
        }

        return (
            <div className="deckCardContainer">
                {
                    deckList
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckCardContainer);