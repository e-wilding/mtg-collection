import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchDisplay from '../components/SearchDisplay.jsx'
import Card from '../components/Card.jsx'
import * as actions from '../actions/actions.js'
const scryfall = require("scryfall-client");

const mapStateToProps = state => ({
    totalCards: state.collection.totalCards,
    cardImage: state.collection.lastCard.img,
    collection: state.collection.collection,
    deck_mode: state.collection.deck_mode,
    search_error: state.collection.search_error,
});

const mapDispatchToProps = dispatch => ({
    findCard: (e) => {
        e.preventDefault()
        const cardName = document.querySelector('#cardNameSearch')
        console.log(cardName.value)
        console.log("Entered Find Card Fn")
        scryfall.getCard(cardName.value, "exactName")
            .then((card) => {
                console.log(card)
                dispatch(actions.newSearch(card))
            })
            .catch((err) => {
                dispatch(actions.errorSearch())
                console.log("ERROR FETCHING CARD: ", err);
            })
    }

});

class CollectionContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let collection = []

        for (const [key, val] of Object.entries(this.props.collection)) {
            console.log("VAL OF CARD: ", val);
            let newCard = <Card key={val.card.id} card={val}></Card>
            collection.push(newCard);
        }


        if (collection.length === 0) {
            collection.push(<h1>COLLECTION IS EMPTY!</h1>)
        }

        return (
            <div className="collectionContainer">
                {
                    <SearchDisplay
                        totalCards={this.props.totalCards}
                        findCard={this.props.findCard}
                        error={this.props.search_error}>
                    </SearchDisplay>
                }
                {
                    collection
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionContainer);