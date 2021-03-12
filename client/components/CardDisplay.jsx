import React, { Component } from 'react';

class CardDisplay extends Component {
    constructor(props) {
      super(props);
      this.addCard.bind(this)
    }

    addCard() {
        console.log("add a card")
    }

    deleteCard() {
        console.log("delete a card")
    }

    render() {
        return(
            <div className="cardDisplay">
                <img src="https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/8/c8817585-0d32-4d56-9142-0d29512e86a9.jpg?1598304029"></img>
                <input className="addCardBtn"    type="button" value="+" onClick={this.addCard}/>
                <input className="deleteCardBtn" type="button" value="-" onClick={this.deleteCard}/>
            </div>
        ); 
    }
}

export default CardDisplay;