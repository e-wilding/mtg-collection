import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchDisplay from '../components/SearchDisplay.jsx'
import Card from '../components/Card.jsx'
import * as actions from '../actions/actions.js'
import DeckDisplay from '../components/DeckDisplay.jsx';
const scryfall = require("scryfall-client");

const mapStateToProps = state => ({
    collection: state.collection.collection,
    deck_collection: state.collection.deck_collection,
    deck_mode: state.collection.deck_mode,
    decks: state.collection.decks,
    deck_loaded: state.collection.deck_loaded,
});

const mapDispatchToProps = dispatch => ({
    moveFromCollToDeck: (card) => {
        console.log("MOVING CARD FROM COLL TO DECK")
        // remove card from collection
        dispatch(actions.deleteCardFromDeckCollection(card))
        dispatch(actions.addCardToDeck(card))
    },
});

class DeckContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let deckCollectionList = []

        // deck collection list
        for (const [key, val] of Object.entries(this.props.deck_collection)) {
            let newCard = <Card key={val.card.id} card={val}></Card>
            let btn_plus = <button onClick={() => this.props.moveFromCollToDeck(val.card)}>+</button>
            deckCollectionList.push(newCard, btn_plus);
        }

        if (this.props.deck_loaded === -1) {
            deckCollectionList.push(<h1>NO DECK LOADED. CREATE ONE!</h1>)
        } else if (deckCollectionList.length === 0) {
            deckCollectionList.push(<h1>DECK COLLECTION IS EMPTY!
                                        ADD CARDS TO YOUR COLLECTION!</h1>)
        }

        return (
            <div className="deckCollectionContainer">
                <span>
                    {
                        deckCollectionList
                    }
                </span>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckContainer);