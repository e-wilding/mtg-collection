import React, { Component } from 'react';
// const mtg = require('mtgsdk')

class CollectionDisplay extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return(
            <div className="collectionDisplay">
                <input type="text" id="cardsearch"></input>
                <input type="button" value="Submit"/>
                {/* List of cards in collection */}
            </div>
        ); 
    }
}

export default CollectionDisplay;