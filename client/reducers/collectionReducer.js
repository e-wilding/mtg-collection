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
      card : {},
      img : "https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757283"
   },
   collection : {
      // cardName : {
            // individual_count : 0
            // card : {}
      // }
   },
   totalCards: 0,
 };
 
 const collectionReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.NEW_SEARCH: {
         console.log("NEW SEARCH PAYLOAD: ", action.payload.card)

         let lastCard = {
            card : action.payload.card,
            img : action.payload.card.image_uris.normal
         }
 
         return {
            ...state,
            lastCard
          };
       }
     case types.ADD_CARD: {
        console.log("INSIDE ADD CARD REDUCER")
        const totalCards = state.totalCards += 1;
        // If the card name is already in your collection just increase the count by 1
        // Otherwise store it into a new entry in your collection and set count to 1 
        const newCollection =  { ...(state.collection) };

         console.log("NEW COLLECTION NAME: ", Object.keys(newCollection))
         console.log("LAST CARD NAME: ", state.lastCard.card.name.toString())


        if(state.lastCard.card.name in newCollection) {
           console.log("ALREADY HAVE THIS CARD")
            newCollection[state.lastCard.card.name].count = newCollection[state.lastCard.card.name].count + 1
         } else {
            console.log("DO NOT HAVE THIS CARD")
            newCollection[state.lastCard.card.name.toString()] = {
               card : state.lastCard.card,
               count : 1
            }
         }
         console.log("NEW COLLECTION AFTER: ", newCollection)

        return {
           ...state,
           totalCards,
           collection : newCollection
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
 