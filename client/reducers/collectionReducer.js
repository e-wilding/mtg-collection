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
   search_error: false,
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
      case types.SEARCH_ERROR: {
         return {
            ...state,
            search_error: true,
         }
      }
      case types.UPDATE_LOADED_DECK_ID: {
         const newDeckLoadedId = action.payload.id;

         return {
            ...state,
            deck_loaded: newDeckLoadedId
         }
      }
      case types.TOGGLE_VIEW_MODE: {
         console.log("INSIDE TOGGLE_VIEW_MODE")
         console.log("DECK_MODE IS CHANGING FROM ", state.deck_mode, " TO ", !state.deck_mode)
         const newDeckMode = !state.deck_mode

         return {
            ...state,
            deck_mode: newDeckMode,
         }
      }
      case types.DELETE_CARD_FROM_DECK_COLLECTION: {
         const newDeckCollection = { ...state.deck_collection };
         const cardName = action.payload.card.name;
         const cardToDelete = newDeckCollection[cardName];
         let cardCount = newDeckCollection[cardName].count;

         console.log("INSIDE DELETE_CARD_FROM_DECK_COLLECTION")
         console.log("DELETING ", cardName, " FROM DECK ID", state.deck_loaded)

         if (cardName in newDeckCollection) {
            console.log("HAVE CARD IN COLLECTION AS EXPECTED")
            newDeckCollection[cardName].count = cardCount > 0 ? cardCount - 1 : 0
            if (cardToDelete.count === 0) {
               delete (newDeckCollection[cardName])
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
         const newDeckCollection = { ...state.deck_collection }
         const cardName = action.payload.card.name;
         const cardToAdd = newDeckCollection[cardName]

         console.log("INSIDE ADD_CARD_TO_DECK_COLLECTION")
         console.log("ADDING ", cardName.toString(), " TO DECK COLLECTION")

         if (cardToAdd !== undefined) {
            console.log("CARD TO ADD : ", cardToAdd)
            if (cardName in newDeckCollection) {
               console.log("ALREADY HAD THIS CARD")
               newDeckCollection[cardName].count = cardToAdd.count + 1
            }
         } else {
            console.log("DO NOT HAD THIS CARD")
            newDeckCollection[cardName] = {
               card: action.payload.card,
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
         const cardName = action.payload.card.name;
         const cardToDelete = newDecks[state.deck_loaded].cardList[cardName];

         console.log("INSIDE DELETE_CARD_FROM_DECK")
         console.log("DELETING ", cardName, " FROM DECK ID: ", state.deck_loaded)

         if (cardName in newDecks[state.deck_loaded].cardList) {
            console.log("ALREADY HAVE THIS CARD IN DECK AS EXPECTED")
            newDecks[state.deck_loaded].cardList[cardName].count = cardToDelete.count > 0 ? cardToDelete.count - 1 : 0
            if (cardToDelete.count === 0) {
               delete (newDecks[state.deck_loaded].cardList[cardName])
            }
         }

         return {
            ...state,
            decks: newDecks,
         };
      }
      case types.ADD_CARD_TO_DECK: {
         const newDecks = [...state.decks]
         const cardName = action.payload.card.name
         const cardToAdd = newDecks[state.deck_loaded].cardList[cardName];
         //action.payload.card
         console.log("INSIDE ADD_CARD_TO_DECK")
         console.log("ADDING ", cardName, " TO DECK ID: ", state.deck_loaded)

         if (cardName in newDecks[state.deck_loaded].cardList) {
            console.log("ALREADY HAVE THIS CARD IN DECK")
            newDecks[state.deck_loaded].cardList[cardName].count = cardToAdd.count + 1
         } else {
            console.log("DO NOT HAVE THIS CARD IN DECK YET")
            newDecks[state.deck_loaded].cardList[cardName] = {
               card: action.payload.card,
               count: 1
            }
         }

         return {
            ...state,
            decks: newDecks,
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
         const newCollection = { ...state.collection };
         const newDeckCollection = { ...state.deck_collection }
         const totalCards = state.totalCards += 1;
         const cardName = state.lastCard.card.name;
         const cardToAdd = newCollection[cardName];
         const cardToAddDeck = newDeckCollection[cardName];

         console.log("INSIDE ADD_CARD_TO_COLLECTION")
         console.log("ADDING ", cardName, " TO COLLECTION")

         if (cardName in newCollection) {
            console.log("ALREADY HAVE THIS CARD")
            newCollection[cardName].count = cardToAdd.count + 1
         } else {
            console.log("DO NOT HAVE THIS CARD")
            newCollection[cardName] = {
               card: state.lastCard.card,
               count: 1
            }
         }

         if (cardName in newDeckCollection) {
            newDeckCollection[cardName].count = cardToAddDeck.count + 1
         } else {
            newDeckCollection[cardName] = {
               card: state.lastCard.card,
               count: 1
            }
         }

         return {
            ...state,
            search_error: false,
            totalCards,
            deck_collection: newDeckCollection,
            collection: newCollection
         }
      }
      case types.DELETE_CARD_FROM_COLLECTION: {
         let totalCards = state.totalCards;
         const newCollection = { ...state.collection };
         const newDeckCollection = { ...state.deck_collection }
         const cardName = state.lastCard.card.name;
         const cardToDelete = newCollection[cardName];
         const deckCardToDelete = newDeckCollection[cardName];

         if (cardName in newCollection) {
            console.log("ALREADY HAVE THIS CARD")
            totalCards = cardToDelete.count > 0 ? state.totalCards - 1 : state.totalCards;
            newCollection[cardName].count = cardToDelete.count > 0 ? cardToDelete.count - 1 : 0
            if (cardToDelete.count === 0) {
               delete (newCollection[cardName])
            }
         }

         if (cardName in newDeckCollection) {
            console.log("ALREADY HAVE THIS CARD")
            totalCards = deckCardToDelete.count > 0 ? state.totalCards - 1 : state.totalCards;
            newDeckCollection[cardName].count = deckCardToDelete.count > 0 ? deckCardToDelete.count - 1 : 0
            if (deckCardToDelete.count === 0) {
               delete (newDeckCollection[cardName])
            }
         }

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
