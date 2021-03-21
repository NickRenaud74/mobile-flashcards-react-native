import React from 'react'
import { useDispatch } from 'react-redux'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { blue, gray, red } from '../utils/colors'
import { deleteDeck } from '../actions'

function Deck({ route, navigation }) {
    const { deck } = route.params
    const dispatch = useDispatch()

    async function handleDeleteDeck() {
        await dispatch(deleteDeck(deck.title))
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.deckTitle}>{deck.title}</Text>
                <Text style={styles.deckCards} >{deck.questions.length} cards </Text>
            </View>
            <View>
                <Button
                    title='Add Card'
                    type='solid'
                    raised
                    buttonStyle={{ backgroundColor: blue }}
                    containerStyle={{ margin: 20 }}
                />
                <Button
                    title='Start Quiz'
                    type='solid'
                    raised
                    buttonStyle={{ backgroundColor: blue }}
                    containerStyle={{ margin: 20 }}
                />
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