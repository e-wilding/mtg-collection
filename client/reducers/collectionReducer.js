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
   deck_collection: {

   },
   collection: {
      // cardName : {
      // individual_count : 0
      // card : {}
      // }
   },
   totalCards: 0,
};

/*
export const ADD_CARD_TO_COLLECTION = "ADD_CARD_TO_COLLECTION"
export const DELETE_CARD_FROM_COLLECTION = "DELETE_CARD_FROM_COLLECTION"
export const ADD_CARD_TO_DECK = "ADD_CARD_TO_DECK"
export const DELETE_CARD_FROM_DECK = "DELETE_CARD_FROM_DECK"
export const ADD_CARD_TO_DECK_COLLECTION = "ADD_CARD_TO_DECK_COLLECTION"
export const DELETE_CARD_FROM_DECK_COLLECTION = "DELETE_CARD_FROM_DECK_COLLECTION"
*/
const collectionReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.DELETE_CARD_FROM_DECK_COLLECTION: {
         const newDeckCollection = { ...(state.deck_collection) };

         console.log("INSIDE DELETE_CARD_FROM_DECK_COLLECTION")
         console.log("DELETING ", action.payload.card.name, " FROM DECK ID", state.deck_loaded)

         if (action.payload.card.name in newDeckCollection) {
            console.log("HAVE CARD IN COLLECTION AS EXPECTED")
            newDeckCollection[action.payload.card.name].count = newDeckCollection[action.payload.card.name].count > 0 ? newDeckCollection[action.payload.card.name].count - 1 : 0
            if (newDeckCollection[action.payload.card.name].count === 0) {
               delete (newDeckCollection[action.payload.card.name])
            }
         } else {
            console.log("TRYING TO DELETE CARD THAT DOESN'T EXIST FROM DECK FOR SOME WEIRD REASON")
         }

         return {
            ...state,
            deck_collection: newDeckCollection,
         };
      }
      case types.ADD_CARD_TO_DECK_COLLECTION: {
         const newDeckCollection = { ...(state.deck_collection) }
         console.log("ADDING ", action.payload.card.name, " TO DECK COLLECTION")

         if (action.payload.card.name in newDeckCollection) {
            console.log("ALREADY HAD THIS CARD")
            newDeckCollection[action.payload.card.name].count = newDeckCollection[action.payload.card.name].count + 1
         } else {
            console.log("DO NOT HAD THIS CARD")
            newDeckCollection[action.payload.card.name.toString()] = {
               card: state.lastCard.card,
               count: 1
            }
         }

         return {
            ...state,
            deck_collection: newDeckCollection,
         };
      }
      case types.DELETE_CARD_FROM_DECK: {
         const newDecks = [...state.decks]

         console.log("INSIDE DELETE_CARD_FROM_DECK")
         //totalCards = newDeckCollection[state.lastCard.card.name].count > 0 ? state.totalCards - 1 : state.totalCards;
         // newDeckCollection[action.payload.cardName].count = newDeckCollection[action.payload.cardName].count > 0 ? newDeckCollection[action.payload.cardName].count - 1 : 0
         // if (newDeckCollection[action.payload.cardName].count === 0) {
         //    delete (newDeckCollection[action.payload.cardName])
         // }

         return {
            ...state,
         };
      }
      case types.ADD_CARD_TO_DECK: {
         const newDecks = [...state.decks]
         //action.payload.card
         console.log("INSIDE ADD_CARD_TO_DECK")
         console.log("ADDING ", action.payload.card.name, " TO DECK ID: ", state.deck_loaded)

         if (action.payload.card.name in newDecks[state.deck_loaded].cardList) {
            console.log("ALREADY HAVE THIS CARD IN DECK")
            newDecks[state.deck_loaded].cardList[action.payload.card.name].count = newDecks[state.deck_loaded].cardList[action.payload.card.name].count + 1
         } else {
            console.log("DO NOT HAVE THIS CARD IN DECK YET")
            newDecks[state.deck_loaded].cardList[action.payload.card.name.toString()] = {
               card: action.payload.card,
               count: 1
            }
         }

         return {
            ...state,
            decks: newDecks
         };
      }
      case types.ADD_DECK: {
         const newDeck = {
            name: action.payload.deckName,
            id: state.decks.length,
            cardList: {
               // cardName : {
               // individual_count : 0
               // card : {}
               // }
            },
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
      case types.ADD_CARD_TO_COLLECTION: {
         // If the card name is already in your collection just increase the count by 1
         // Otherwise store it into a new entry in your collection and set count to 1 
         const newCollection = { ...(state.collection) };
         const newDeckCollection = { ...(state.deck_collection) }
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
         if (state.lastCard.card.name in newDeckCollection) {
            newDeckCollection[state.lastCard.card.name].count = newDeckCollection[state.lastCard.card.name].count + 1
         } else {
            newDeckCollection[state.lastCard.card.name.toString()] = {
               card: state.lastCard.card,
               count: 1
            }
         }

         return {
            ...state,
            totalCards,
            deck_collection: newDeckCollection,
            collection: newCollection
         }
      }
      case types.DELETE_CARD_FROM_COLLECTION: {
         let totalCards = state.totalCards;
         const newCollection = { ...(state.collection) };

         //if (action.payload.from_collection) {
         if (state.lastCard.card.name in newCollection) {
            console.log("ALREADY HAVE THIS CARD")
            totalCards = newCollection[state.lastCard.card.name].count > 0 ? state.totalCards - 1 : state.totalCards;
            newCollection[state.lastCard.card.name].count = newCollection[state.lastCard.card.name].count > 0 ? newCollection[state.lastCard.card.name].count - 1 : 0
            if (newCollection[state.lastCard.card.name].count === 0) {
               delete (newCollection[state.lastCard.card.name])
            }
         }
         // } else {
         //    if (action.payload.cardName in newDeckCollection) {
         //       console.log("ALREADY HAVE THIS CARD IN DECk")
         //       //totalCards = newDeckCollection[state.lastCard.card.name].count > 0 ? state.totalCards - 1 : state.totalCards;
         //       newDeckCollection[action.payload.cardName].count = newDeckCollection[action.payload.cardName].count > 0 ? newDeckCollection[action.payload.cardName].count - 1 : 0
         //       if (newDeckCollection[action.payload.cardName].count === 0) {
         //          delete (newDeckCollection[action.payload.cardName])
         //       }
         //    }
         // }

         return {
            ...state,
            totalCards,
            collection: newCollection,
            deck_collection: newDeckCollection
         }
      }
      default: {
         return state;
      }
   }
};

export default collectionReducer;
