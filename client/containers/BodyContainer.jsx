/**
 * ************************************
 *
 * @module  BodyContainer
 * @author
 * @date
 * @description stateful component that renders different displays
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CollectionsDisplay from '../components/CollectionsDisplay.jsx';
import CollectionContainer from './CollectionContainer.jsx'
import CardDisplay from '../components/CardDisplay.jsx';
import MyDecksContainer from './MyDecksContainer.jsx';
import DeckContainer from './DeckContainer.jsx';
import DeckCollectionContainer from './DeckCollectionContainer.jsx';
import * as actions from '../actions/actions.js'
import HeaderContainer from './HeaderContainer.jsx';

const mapStateToProps = state => ({
    cardImage: state.collection.lastCard.img,
    deck_mode: state.collection.deck_mode,
    lastCard: state.collection.lastCard,
});

const mapDispatchToProps = dispatch => ({
    // create functions that will dispatch action creators
    addCard: (card) => {
        dispatch(actions.addCardToCollection(card))
    },

    deleteCard: (card) => {
        dispatch(actions.deleteCardFromCollection(card))
    },
});

class BodyContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bodyContainer">
                {
                    this.props.deck_mode ? <MyDecksContainer></MyDecksContainer> : null
                }
                {
                    this.props.deck_mode ? <DeckCollectionContainer></DeckCollectionContainer> : null
                }
                {
                    this.props.deck_mode ? <DeckContainer></DeckContainer> : null
                }
                {
                    //<CollectionsDisplay></CollectionsDisplay>
                }
                {
                    this.props.deck_mode ? null : <CollectionContainer></CollectionContainer>
                }
                {
                    this.props.deck_mode ? null :
                        <CardDisplay
                            cardImage={this.props.cardImage}
                            addCard={this.props.addCard}
                            deleteCard={this.props.deleteCard}
                            card={this.props.lastCard}>
                        </CardDisplay>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);