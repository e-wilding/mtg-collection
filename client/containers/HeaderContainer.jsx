import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card.jsx'
import * as actions from '../actions/actions.js'
import HeaderDisplay from '../components/HeaderDisplay.jsx';
const scryfall = require("scryfall-client");

const mapStateToProps = state => ({
    totalCards: state.collection.totalCards,
    cardImage: state.collection.lastCard.img,
    collection: state.collection.collection,
    deck_mode: state.collection.deck_mode,
    search_error: state.collection.search_error,
});

const mapDispatchToProps = dispatch => ({

});

class HeaderContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="headerContainer">
                {
                    <HeaderDisplay></HeaderDisplay>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);