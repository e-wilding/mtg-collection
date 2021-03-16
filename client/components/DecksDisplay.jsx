import React, { Component } from 'react';

const DecksDisplay = (props) => (
    <div className="deckDisplay">
        <button className="deckBtn" onClick={() => props.updateLoadedDeckId(props.deckId)}>{props.deckName}</button>
    </div>
);

export default DecksDisplay;