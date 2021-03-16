import * as types from '../constants/actionTypes';

export const addCard = () => ({
    type: types.ADD_CARD,
})

export const deleteCard = () => ({
    type: types.DELETE_CARD,
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