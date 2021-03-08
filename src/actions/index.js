const GET_DECKS = 'GET_DECKS'
const REMOVE_DECK = 'REMOVE_DECK'
const ADD_DECK = 'ADD_DECK'
const ADD_CARD = 'ADD_CARD'

export function getDecks(decks) {
    return {
        type: GET_DECKS,
        decks
    }
}

export function removeDeck(deck) {
    return {
        type: REMOVE_DECK,
        deck
    }
}

export function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

export function addCard(deck, card) {
    return {
        type: ADD_CARD,
        deck,
        card
    }
}