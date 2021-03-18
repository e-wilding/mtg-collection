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
    moveFromDeckToColl: (card) => {
        console.log("MOVING CARD FROM DECK TO COLL")
        // remove card from collection
        dispatch(actions.addCardToDeckCollection(card))
        dispatch(actions.deleteCardFromDeck(card))
    }
});

class DeckContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let deckList = []

        // // deck list
        if (this.props.deck_loaded !== -1) {
            console.log("DECK ID LOADED: ", this.props.deck_loaded)
            const deckName = <h1>{this.props.decks[this.props.deck_loaded].name}</h1>
            deckList.push(deckName)
            console.log("CARD LIST: ", this.props.decks[this.props.deck_loaded].cardList)
            for (const [key, val] of Object.entries(this.props.decks[this.props.deck_loaded].cardList)) {
                let newCard = <Card key={val.card.id} card={val}></Card>
                let btn_minus = <button onClick={() => this.props.moveFromDeckToColl(val.card)}>-</button>
                deckList.push(newCard, btn_minus);
            }
        }

        return (
            <div className="deckContainer">
                <span>
                    {

                    }
                    {
                        deckList
                    }
                </span>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckContainer);