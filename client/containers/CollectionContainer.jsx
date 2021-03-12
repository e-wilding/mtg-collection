import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchDisplay from '../components/SearchDisplay.jsx'
import Card from '../components/Card.jsx'
import * as actions from '../actions/actions.js'
const scryfall = require("scryfall-client");

const mapStateToProps = state => ({
    totalCards : state.collection.totalCards,
    cardImage  : state.collection.lastCard.img,
    collection : state.collection.collection
});
 
 const mapDispatchToProps = dispatch => ({
    findCard: () => {
        console.log("Entered Find Card Fn")
        console.time("cardFetch")
            scryfall.getCard("Jace, the Mindsculptor", "exactName")
                    .then((card) => {
                        console.log(card)
                        console.timeEnd("cardFetch")
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

        for(const [key, val] of Object.entries(this.props.collection)){
            let newCard = <Card key={val.card.id} card={val}></Card>
            cardList.push(newCard);
        }

        return(
            <div className="collectionContainer">
                {
                    <SearchDisplay
                        totalCards  = {this.props.totalCards}
                        findCard    = {this.props.findCard}>
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