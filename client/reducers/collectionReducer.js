/**
 * ************************************
 *
 * @module  collectionReducer
 * @author
 * @date
 * @description reducer for collection data
 *
 * ************************************
 */

import { bindActionCreators } from 'redux';
import * as types from '../constants/actionTypes';

const initialState = {
   deck_mode: true,
   deck_loaded: -1, // index of loaded deck
   decks: [], // array of objects 
   lastCard: {
      card: {},
      img: "https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757283"
   },
   collection: {
      // cardName : {
      // individual_count : 0
      // card : {}
      // }
   },
   totalCards: 0,
};

const collectionReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.ADD_DECK: {
         const newDeck = {
            name: action.payload.deckName,
            id: state.decks.size,
            cardList: [],
         }

         const decks = state.decks.slice();
         decks.push(newDeck)

         return {
            ...state,
            decks,
            deck_loaded: newDeck.id, // always load deck you just added
         };
      }
      case types.NEW_SEARCH: {
         const lastCard = {
            card: action.payload.card,
            img: action.payload.card.image_uris.normal
         }

         return {
            ...state,
            lastCard
         };
      }
      case types.ADD_CARD: {
         // If the card name is already in your collection just increase the count by 1
         // Otherwise store it into a new entry in your collection and set count to 1 
         const newCollection = { ...(state.collection) };
         const totalCards = state.totalCards += 1;

         if (state.lastCard.card.name in newCollection) {
            console.log("ALREADY HAVE THIS CARD")
            newCollection[state.lastCard.card.name].count = newCollection[state.lastCard.card.name].count + 1
         } else {
            console.log("DO NOT HAVE THIS CARD")
            newCollection[state.lastCard.card.name.toString()] = {
               card: state.lastCard.card,
               count: 1
            }
         }

         return {
            ...state,
            totalCards,
            collection: newCollection
         }
      }
      case types.DELETE_CARD: {
         let totalCards = state.totalCards;
         const newCollection = { ...(state.collection) };

         if (state.lastCard.card.name in newCollection) {
            console.log("ALREADY HAVE THIS CARD")
            totalCards = newCollection[state.lastCard.card.name].count > 0 ? state.totalCards - 1 : state.totalCards;
            newCollection[state.lastCard.card.name].count = newCollection[state.lastCard.card.name].count > 0 ? newCollection[state.lastCard.card.name].count - 1 : 0
            if (newCollection[state.lastCard.card.name].count === 0) {
               delete (newCollection[state.lastCard.card.name])
            }
         }

         return {
            ...state,
            totalCards,
            collection: newCollection
         }
      }
      default: {
         return state;
      }
   }
};

export default collectionReducer;
