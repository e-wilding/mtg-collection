import * as types from '../constants/actionTypes';

export const addCard = () => ({
    type: types.ADD_CARD,
    // payload: 1
})

export const deleteCard = () => ({
    type: types.DELETE_CARD,
    // payload: 1
})

export const newSearch = (searched_card) => ({
    type: types.NEW_SEARCH,
    payload: {
        card : searched_card
    }
})