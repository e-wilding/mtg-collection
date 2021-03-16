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
                console.log("ERROR FETCHING CARD: ", err);
            })
    }

});

class CollectionContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let cardList = []

        for (const [key, val] of Object.entries(this.props.collection)) {
            console.log("VAL OF CARD: ", val);
            let newCard = <Card key={val.card.id} card={val}></Card>
            cardList.push(newCard);
        }

        return (
            <div className="collectionContainer">
                {
                    <SearchDisplay
                        totalCards={this.props.totalCards}
                        findCard={this.props.findCard}>
                    </SearchDisplay>
                }
                {
                    cardList
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionContainer);