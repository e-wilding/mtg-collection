import React, { Component } from 'react';
import CardDisplay from './CardDisplay.jsx'
const scryfall = require("scryfall-client");


class CollectionDisplay extends Component {
    constructor(props) {
      super(props);
      this.findCard.bind(this)
    }

    findCard(name) {
        console.log("Entered Find Card Fn")
        console.time("cardFetch")
            scryfall.getCard("Jace, the Mindsculptor", "exactName")
                    .then((card) => {
                        console.log(card)
                        console.timeEnd("cardFetch")
                    })
                    .catch((err) => {
                        console.log("ERROR FETCHING CARD");
                    })
    }


    render() {
        return(
            <div className="collectionDisplay">
                <input type="text" id="cardsearch"></input>
                <input type="button" value="Submit" onClick={this.findCard}/>
            </div>
        ); 
    }
}

export default CollectionDisplay;