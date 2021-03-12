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
   cardImage : "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/8/c8817585-0d32-4d56-9142-0d29512e86a9.jpg?1598304029",
   totalCards: 0,
 };
 
 const collectionReducer = (state = initialState, action) => {
   switch (action.type) {
     case types.ADD_CARD: {
        const totalCards = state.totalCards += 1;

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
 