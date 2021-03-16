import React, { Component } from 'react';

const DecksDisplay = (props) => (
    <div className="deckDisplay">
        <span>{props.deckName}</span>
    </div>
);

export default DecksDisplay;