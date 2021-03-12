/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CollectionsDisplay from '../components/CollectionsDisplay.jsx';
import CollectionDisplay from '../components/CollectionDisplay.jsx';
import CardDisplay from '../components/CardDisplay.jsx';
import * as actions from '../actions/actions.js'
const scryfall = require("scryfall-client");

const mapStateToProps = state => ({
    totalCards : state.collection.totalCards,
    cardImage  : state.collection.lastCard.img
});
 
 const mapDispatchToProps = dispatch => ({
   // create functions that will dispatch action creators
    addCard: () => {
        dispatch(actions.addCard())
    },

    deleteCard: () => {
        dispatch(actions.deleteCard())
    },

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
 
 class MainContainer extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return(
            <div className="container">
                { 
                    <CollectionsDisplay></CollectionsDisplay>
                }
                {
                    <CollectionDisplay 
                        totalCards  = {this.props.totalCards}
                        findCard    = {this.props.findCard}>
                    </CollectionDisplay> 
                }
                {
                    <CardDisplay 
                        cardImage   = {this.props.cardImage}
                        addCard     = {this.props.addCard}
                        deleteCard  = {this.props.deleteCard}>
                    </CardDisplay>
                }
            </div>
        );
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);