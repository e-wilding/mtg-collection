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
    totalCards : 1,
 };
 
 const collectionReducer = (state = initialState, action) => {
   switch (action.type) {
     case types.ADD_CARD: {
        return state;
     }
     default: {
        return state;
     }
   }
 };
 
 export default collectionReducer;
 