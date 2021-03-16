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
        let collectionList = []

        // deck collection list
        for (const [key, val] of Object.entries(this.props.deck_collection)) {
            let newCard = <Card key={val.card.id} card={val}></Card>
            let btn_plus = <button onClick={() => this.props.moveFromCollToDeck(val.card)}>+</button>
            let btn_minus = <button onClick={() => this.props.moveFromDeckToColl(val.card)}>-</button>
            collectionList.push(newCard, btn_plus, btn_minus);
        }

        // // deck list
        if (this.props.deck_loaded !== -1) {
            console.log("DECK ID LOADED: ", this.props.deck_loaded)
            console.log("CARD LIST: ", this.props.decks[this.props.deck_loaded].cardList)
            for (const [key, val] of Object.entries(this.props.decks[this.props.deck_loaded].cardList)) {
                //         console.log("CARD LIST VAL: ", val)
                let newCard = <Card key={val.card.id} card={val}></Card>
                //         //let newCard = <Card></Card>
                deckList.push(newCard);
            }
        }

        // Load card list based on currently loaded deck
        // for (const [key, val] of Object.entries(this.props.collection)) {
        //     let newCard = <Card key={val.card.id} card={val}></Card>
        //     cardList.push(newCard);
        // }

        return (
            <div className="DeckContainer">
                {
                    collectionList
                }
                DECK_LIST:
                {
                    deckList
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckContainer);