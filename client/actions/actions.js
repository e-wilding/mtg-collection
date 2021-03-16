import * as types from '../constants/actionTypes';

export const addCard = () => ({
    type: types.ADD_CARD,
})

// default is true, only specify to false if removing from deck
export const deleteCard = (from_collection = true) => ({
    type: types.DELETE_CARD,
    payload: {
        // from_collection is a boolean to rather remove from collection or deck
        fromCollection: from_collection
    }
})

export const newSearch = (searched_card) => ({
    type: types.NEW_SEARCH,
    payload: {
        card: searched_card
    }
})


export const addDeck = (deck_name) => ({
    type: types.ADD_DECK,
    payload: {
        deckName: deck_name
    }
})