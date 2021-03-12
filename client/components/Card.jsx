import React, { Component } from 'react';

const Card = (props) => (
    <div className="cardDisplay">
        <span>{props.card.card.name} {props.card.count}</span>
    </div>
); 

export default Card;