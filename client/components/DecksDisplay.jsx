import React, { Component } from 'react';

const DecksDisplay = (props) => (
    <div className="deckDisplay">
        <button onClick={() => props.updateLoadedDeckId(props.deckId)}></button>
    </div>
);

export default DecksDisplay;