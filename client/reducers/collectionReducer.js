/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

 import * as types from '../constants/actionTypes';

 const initialState = {
   lastCard  : {
      img : "https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757283"
   },
   totalCards: 0,
 };
 
 const collectionReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.NEW_SEARCH: {
         console.log("NEW SEARCH PAYLOAD: ", action.payload.img_uri)
         let lastCard = {
            img : action.payload.img_uri
         }
 
         return {
            ...state,
            lastCard
          }
       }
     case types.ADD_CARD: {
        const totalCards = state.totalCards += 1;

        return {
           ...state,
           totalCards,
         }
      }
      case types.DELETE_CARD: {
         const totalCards = state.totalCards > 0 ? state.totalCards - 1 : 0;
 
         return {
            ...state,
            totalCards,
          }
       }
     default: {
        return state;
     }
   }
 };
 
 export default collectionReducer;
 