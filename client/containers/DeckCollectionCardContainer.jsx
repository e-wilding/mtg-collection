import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchDisplay from '../components/SearchDisplay.jsx'
import Card from '../components/Card.jsx'
import * as actions from '../actions/actions.js'
import DeckDisplay from '../components/DeckDisplay.jsx';
import DeckCollectionCardDisplay from '../components/DeckCollectionCardDisplay.jsx';
const scryfall = require("scryfall-client");

const mapStateToProps = state => ({
    collection: state.collection.collection,
    deck_collection: state.collection.deck_collection,
    deck_mode: state.collection.deck_mode,
    decks: state.collection.decks,
    deck_loaded: state.collection.deck_loaded,
});

const mapDispatchToProps = dispatch => ({
    moveFromCollToDeck: (card, deckId) => {
        console.log("MOVING CARD FROM COLL TO DECK")
        console.log("MOVIGN CARD IS ", card)
        // remove card from collection
        if (deckId !== -1) {
            dispatch(actions.deleteCardFromDeckCollection(card))
            dispatch(actions.addCardToDeck(card))
        }
    },
});

class DeckCollectionCardContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let deckCollectionList = []

        // deck collection list
        for (const [key, val] of Object.entries(this.props.deck_collection)) {
            let newCard = <DeckCollectionCardDisplay key={val.card.id} card={val}
                moveFromCollToDeck={this.props.moveFromCollToDeck}
                deckId={this.props.deck_loaded}
                deck_mode={this.props.deck_mode}></DeckCollectionCardDisplay>
            deckCollectionList.push(newCard);
        }

        if (this.props.deck_loaded === -1) {
            deckCollectionList.push(<h1>NO DECK LOADED. CREATE ONE!</h1>)
        } else if (deckCollectionList.length === 0) {
            deckCollectionList.push(<h1>DECK COLLECTION IS EMPTY!
                                    ADD CARDS TO YOUR COLLECTION!</h1>)
        }

        return (
            <div className="deckCollectionCardContainer">
                {
                    deckCollectionList
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckCollectionCardContainer);