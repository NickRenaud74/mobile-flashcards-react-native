import AsyncStorage from '@react-native-async-storage/async-storage'
import { decks } from './_DATA'

const STORAGE_KEY = 'MobileCards:deck'

const initDecks = async () => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks))
        } catch (e) {
            console.log('Error setting Async Storage: ', e)
        }
}

export const getDecks = async () => {
    try {
        const data = await AsyncStorage.getItem(STORAGE_KEY)
        return data !== null ? JSON.parse(data) : initDecks()
    } catch(e) {
        console.log('Error reading storage data: ', e)
    }
}

export const getDeck = async(title) => {
    try {
        const allDecks = await AsyncStorage.getItem(STORAGE_KEY)
        const deckData = JSON.parse(allDecks)
        return deckData[title]
    } catch (e) {
        console.log('Error reading storage data', e)
    }
}

export const saveDeckTitle = async(deckTitle) => {
    const newDeck = {
        title: deckTitle,
        questions: []
    }
    try {
        await AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
            [deckTitle]: newDeck
        }))
    } catch (e) {
        console.log('Error trying to save new deck', e)
    }
}

export const addCardToDeck = async(title, card) => {
    try {
        const deck = await getDeck(title)
        await AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
            [title]: {
                ...deck,
                questions: [...deck.questions, card]
            }
        }))
    } catch (e) {
        console.log('Error adding a card to the deck', e)
    }
}

export const removeDeck = async(key) => {
    try {
        const decks = await AsyncStorage.getItem(STORAGE_KEY)
        const deckData = JSON.parse(decks)
        delete deckData[key]
        return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(deckData))
    } catch (e) {
        console.log('Error while removing data', e)
    }
}