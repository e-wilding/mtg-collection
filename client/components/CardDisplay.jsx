import React, { Component } from 'react';
const defaultImg = "https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757283";

const CardDisplay = (props) => (
    <div className="cardImageDisplay">
        <img id="cardFaceDisplay" src={props.cardImage}></img>
        {props.cardImage !== defaultImg ? <input id="addCardBtn" type="button" value="+" onClick={() => props.addCard(props.card.card)} /> : null}
        {props.cardImage !== defaultImg ? <input id="deleteCardBtn" type="button" value="-" onClick={() => props.deleteCard(props.card.card)} /> : null}
    </div>
);

export default CardDisplay;