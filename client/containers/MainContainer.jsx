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
import CollectionContainer from './CollectionContainer.jsx'
// import CollectionDisplay from './CollectionDisplay.jsx';
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
                    <CollectionContainer></CollectionContainer> 
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