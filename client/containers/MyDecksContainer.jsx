import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js'
import DecksDisplay from '../components/DecksDisplay.jsx';
const scryfall = require("scryfall-client");

const mapStateToProps = state => ({
    deck_mode: state.collection.deck_mode,
    decks: state.collection.decks,
});

const mapDispatchToProps = dispatch => ({
    addDeck: (e) => {
        e.preventDefault()
        const deckName = document.querySelector('#deckName')
        dispatch(actions.addDeck(deckName.value));
    }
});

class MyDecksContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const decks = []

        // Loop through deck list...
        for (const deck of this.props.decks) {
            let newDeck = <DecksDisplay id={"deck" + Math.random()} deckName={deck.name}></DecksDisplay>
            decks.push(newDeck);
        }

        return (
            <div className="myDecksContainer">
                {
                    <form>
                        <label>
                            Enter Deck Name:
                            <input type="text" id="deckName" />
                        </label>
                        <input type="submit" value="Create New Deck" onClick={this.props.addDeck} />
                    </form>
                }
                {
                    decks
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDecksContainer);