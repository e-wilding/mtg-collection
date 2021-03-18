import React, { Component } from 'react';
import Card from './Card.jsx'

const DeckCollectionCardDisplay = (props) => (
    <div className="deckCollectionCardDisplay">
        {
            <Card key={props.card.id} card={props.card} deck_mode={props.deck_mode}></Card>
        }
        {
            <button onClick={() => props.moveFromCollToDeck(props.card.card, props.deckId)}>+</button>
        }
    </div>
);

export default DeckCollectionCardDisplay;