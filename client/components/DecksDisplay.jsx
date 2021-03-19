import React, { Component } from 'react';

const DecksDisplay = (props) => (
    <div className="deckDisplay">
        {
            props.deck_active ?
                <button className="deckBtnActive" onClick={() => props.updateLoadedDeckId(props.deckId)}>{props.deckName}</button> :
                <button className="deckBtnNotActive" onClick={() => props.updateLoadedDeckId(props.deckId)}>{props.deckName}</button>
        }
    </div>
);

export default DecksDisplay;