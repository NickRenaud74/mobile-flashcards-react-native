import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { blue, gray, red } from '../utils/colors'
import { deleteDeck } from '../actions'
import CustomButton from './CustomButton'

function Deck({ route, navigation }) {
    const { deckTitle } = route.params
    const deck = useSelector(state => state[deckTitle])
    const dispatch = useDispatch()


    function handleDeleteDeck() {
        dispatch(deleteDeck(deck.title))
        navigation.navigate('Home')
    }

    function handleStart() {
        if (deck.questions.length === 0 ) {
            navigation.navigate('Empty Deck')
        } else {
            navigation.navigate('Quiz', {deckQuiz: deck})
        }
        
    }

    return (
        deck ?
        <View style={styles.container}> 
            <View>
                <Text style={styles.deckTitle}>{deck.title}</Text>
                <Text style={styles.deckCards} >{deck.questions.length} cards </Text>
            </View>
            <View>
                <CustomButton 
                    title='Add Card'
                    onPress={() => navigation.navigate('Add Card', {deck: deck})}
                    color={blue}
                />
                <CustomButton 
                    title='Start Quiz'
                    onPress={handleStart}
                    color={blue}
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
        : null
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