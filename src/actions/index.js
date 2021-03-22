import { _getDecks, _saveDeckTitle, _deleteDeck, _addCardToDeck } from '../utils/api'

export const GET_DECKS = 'GET_DECKS'
export const REMOVE_DECK = 'REMOVE_DECK'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

function getDecks(decks) {
    return {
        type: GET_DECKS,
        decks
    }
}

export function getData() {
    return async (dispatch) => {
        const data = await _getDecks()
        dispatch(getDecks(data))
    }
}

function removeDeck(deck) {
    return {
        type: REMOVE_DECK,
        deck
    }
}

export function deleteDeck(deck) {
    return async (dispatch) => {
        await _deleteDeck(deck)
        dispatch(removeDeck(deck))
    }
}

function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

export function saveDeck(deck) {
    return async (dispatch) => {
        await _saveDeckTitle(deck)
        dispatch(addDeck(deck))
    }
}

function addCard(deck, card) {
    return {
        type: ADD_CARD,
        deck,
        card
    }
}

export function addCardToDeck(deck, card) {
    return async (dispatch) => {
        await _addCardToDeck(deck, card)
        dispatch(addCard(deck, card))
    }
}