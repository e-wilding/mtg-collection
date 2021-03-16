import * as types from '../constants/actionTypes';

export const toggleViewMode = () => ({
    type: types.TOGGLE_VIEW_MODE,
})

export const addCardToCollection = () => ({
    type: types.ADD_CARD_TO_COLLECTION,
})

export const deleteCardFromCollection = () => ({
    type: types.DELETE_CARD_FROM_COLLECTION,
})

// default is false, only specify to true if adding from deck
export const addCardToDeckCollection = (card) => ({
    type: types.ADD_CARD_TO_DECK_COLLECTION,
    payload: {
        card: card,
    }
})

// default is true, only specify to false if removing from deck
export const deleteCardFromDeckCollection = (card) => ({
    type: types.DELETE_CARD_FROM_DECK_COLLECTION,
    payload: {
        card: card,
    }
})

// default is false, only specify to true if adding from deck
export const addCardToDeck = (card) => ({
    type: types.ADD_CARD_TO_DECK,
    payload: {
        card: card,
    }
})

// default is true, only specify to false if removing from deck
export const deleteCardFromDeck = (card) => ({
    type: types.DELETE_CARD_FROM_DECK,
    payload: {
        card: card,
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