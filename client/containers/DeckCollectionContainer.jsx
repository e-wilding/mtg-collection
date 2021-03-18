import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchDisplay from '../components/SearchDisplay.jsx'
import Card from '../components/Card.jsx'
import * as actions from '../actions/actions.js'
import DeckDisplay from '../components/DeckDisplay.jsx';
import DeckCollectionCardContainer from './DeckCollectionCardContainer.jsx';
const scryfall = require("scryfall-client");

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

class DeckContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="deckCollectionContainer">
                {
                    <DeckCollectionCardContainer></DeckCollectionCardContainer>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckContainer);