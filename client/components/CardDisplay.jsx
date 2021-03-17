import React, { Component } from 'react';
const defaultImg = "https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757283";

const CardDisplay = (props) => (
    <div className="cardImageDisplay">
        <img id="cardFaceDisplay" src={props.cardImage}></img>
        {props.cardImage !== defaultImg ? <input className="addCardBtn" type="button" value="+" onClick={props.addCard} /> : null}
        {props.cardImage !== defaultImg ? <input className="deleteCardBtn" type="button" value="-" onClick={props.deleteCard} /> : null}
    </div>
);

export default CardDisplay;