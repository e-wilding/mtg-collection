import React, { Component } from 'react';
import Card from './Card.jsx'

const DeckCardDisplay = (props) => (
    <div className="deckCardDisplay">
        {
            <Card key={props.card.id} card={props.card} deck_mode={props.deck_mode}></Card>
        }
        {
            <button onClick={() => props.moveFromDeckToColl(props.card.card, props.deckId)}>-</button>
        }
    </div>
);

export default DeckCardDisplay;