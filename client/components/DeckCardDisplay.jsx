import React, { Component } from 'react';
import Card from './Card.jsx'
const WHITE_ICON = require("../../images/white_icon.png")
const BLUE_ICON = require("../../images/blue_icon.png")
const BLACK_ICON = require("../../images/black_icon.png")
const RED_ICON = require("../../images/red_icon.png")
const GREEN_ICON = require("../../images/green_icon.png")

const DeckCardDisplay = (props) => (
    <div className="deckCardDisplay">
        {
            <Card key={props.card.id} card={props.card} moveFromCollToDeck={props.moveFromCollToDeck} deck_mode={props.deck_mode}></Card>
        }
        {
            <button onClick={() => props.moveFromCollToDeck(props.card.card, props.deckId)}>+</button>
        }
    </div>
);

export default DeckCardDisplay;