import * as types from '../constants/actionTypes';

export const addCard = () => ({
    type: types.ADD_CARD,
    // payload: 1
})

export const deleteCard = () => ({
    type: types.DELETE_CARD,
    // payload: 1
})

export const newSearch = (img) => ({
    type: types.NEW_SEARCH,
    payload: {
        img_uri : img
    }
})