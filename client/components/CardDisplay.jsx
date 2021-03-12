import React, { Component } from 'react';

const CardDisplay = (props) => (
    <div className="cardDisplay">
        <img src={props.cardImage}></img>
        <input className="addCardBtn" type="button" value="+" onClick={props.addCard} />
        <input className="deleteCardBtn" type="button" value="-" onClick={props.deleteCard} />
    </div>
);

export default CardDisplay;