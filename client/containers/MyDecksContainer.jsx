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
        console.log("PROPS DECKS: ", this.props.decks)
        //for (const key of this.props.decks) {
        for (let i = 0; i < this.props.decks.length; i++) {
            console.log("DECK IDX: ", decks)
            let newDeck = <DecksDisplay id={"deck" + i} deckName={this.props.decks[i].name} deckId={i} updateLoadedDeckId={this.props.updateLoadedDeckId}></DecksDisplay>
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