import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CommonActions } from '@react-navigation/native'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { blue, gray, red } from '../utils/colors'
import { deleteDeck } from '../actions'
import MainButton from './MainButton'

function Deck({ route, navigation }) {
    const { deckTitle } = route.params
    const deck = useSelector(state => state[deckTitle])
    const dispatch = useDispatch()

    function handleDeleteDeck() {
        dispatch(deleteDeck(deck.title))
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.deckTitle}>{deck.title}</Text>
                <Text style={styles.deckCards} >{deck.questions.length} cards </Text>
            </View>
            <View>
                <MainButton 
                    title='Add Card'
                    onPress={() => navigation.navigate('Add Card', {deck: deck})}
                />
                <MainButton title='Start Quiz' />
                <Button
                    title='Delete Deck'
                    type='clear'
                    titleStyle={{ color: red }}
                    containerStyle={{ margin: 20 }}
                    onPress={handleDeleteDeck}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
        justifyContent: 'space-around'
    },
    deckTitle: {
        fontSize: 32,
        color: blue,
        textAlign: 'center'
    },
    deckCards: {
        fontSize: 20,
        color: gray,
        textAlign: 'center'
    }
})

export default Deck