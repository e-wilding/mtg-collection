import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js'
import DecksDisplay from '../components/DecksDisplay.jsx';
const scryfall = require("scryfall-client");

const mapStateToProps = state => ({
    deck_mode: state.collection.deck_mode,
    decks: state.collection.decks,
    deck_loaded: state.collection.deck_loaded,
    deck_creation_error: state.collection.deck_creation_error,
});

const mapDispatchToProps = dispatch => ({
    addDeck: (e) => {
        e.preventDefault()
        const deckName = document.querySelector('#deckName')
        if (deckName.value !== "")
            dispatch(actions.addDeck(deckName.value));
    },

    updateLoadedDeckId: (id) => {
        dispatch(actions.updateLoadedDeckId(id))
    }
});

class MyDecksContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const decks = []

        // Loop through deck list...
        for (let i = 0; i < this.props.decks.length; i++) {
            let newDeck = <DecksDisplay id={"deck" + i}
                deckName={this.props.decks[i].name}
                deckId={i}
                deck_active={i === this.props.deck_loaded}
                updateLoadedDeckId={this.props.updateLoadedDeckId}></DecksDisplay>
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
                    this.props.deck_creation_error ? <h2 className="errorTitle">Error creating deck!</h2> : <h2></h2>
                }
                {
                    decks
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDecksContainer);