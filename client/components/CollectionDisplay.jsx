import React, { Component } from 'react';
import CardDisplay from './CardDisplay.jsx'

const CollectionDisplay = (props) => (
    <div className="collectionDisplay">
        <h1>TOTAL CARDS: {props.totalCards}</h1>
        <input type="text" id="cardsearch"></input>
        <input type="button" value="Submit" onClick={props.findCard}/>
    </div>
)

export default CollectionDisplay;