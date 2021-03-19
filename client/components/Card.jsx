import React, { Component } from 'react';
const WHITE_ICON = require("../../images/white_icon.png")
const BLUE_ICON = require("../../images/blue_icon.png")
const BLACK_ICON = require("../../images/black_icon.png")
const RED_ICON = require("../../images/red_icon.png")
const GREEN_ICON = require("../../images/green_icon.png")
const COLORLESS_ICON = require("../../images/colorless_icon.png")

const Card = (props) => (
    <div className="cardDisplay">
        {props.card.count} |
        <img className="color_icon" src={props.card.card.colors.includes("W") ? WHITE_ICON : null}></img>
        <img className="color_icon" src={props.card.card.colors.includes("U") ? BLUE_ICON : null}></img>
        <img className="color_icon" src={props.card.card.colors.includes("B") ? BLACK_ICON : null}></img>
        <img className="color_icon" src={props.card.card.colors.includes("R") ? RED_ICON : null}></img>
        <img className="color_icon" src={props.card.card.colors.includes("G") ? GREEN_ICON : null}></img>
        <img className="color_icon" src={props.card.card.colors.length === 0 ? COLORLESS_ICON : null}></img>
         | {props.card.card.name}
        {props.deck_mode ? null : <button id="addToCollBtn" onClick={() => props.addCardToCollection(props.card.card)}>+</button>}
        {props.deck_mode ? null : <button id="delFromCollBtn" onClick={() => props.deleteCardFromCollection(props.card.card)}>-</button>}
    </div>
);

export default Card;