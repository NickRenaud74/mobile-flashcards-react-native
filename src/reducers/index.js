import { GET_DECKS, REMOVE_DECK, ADD_DECK, ADD_CARD } from '../actions'

export default function decks(state = {}, action ) {
    switch(action.type) {
        case GET_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case REMOVE_DECK:
            let newState = {...state}
            delete newState[action.deck]
            return newState
        case ADD_DECK:
            const title = action.deck
            return {
                ...state,
                [title]: {
                    title,
                    questions: []
                }
            }
        case ADD_CARD:
            const { deck, card } = action
            return {
                ...state,
                [deck]: {
                    ...state[deck],
                    questions: [...state[deck].questions, card]
                }
            }
        default: 
            return state
    }
}