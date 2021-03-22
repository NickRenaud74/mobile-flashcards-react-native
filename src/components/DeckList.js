import React, { useEffect, useState } from 'react'
import { TouchableOpacity, Text, View, FlatList, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from '../actions'
import { blue, gray } from '../utils/colors'
import AppLoading from 'expo-app-loading'
import AppHeader from './AppHeader'


function DeckList({ navigation }) {
    const [ready, setReady] = useState(false)
    const decks = useSelector(state => state)
    const dispatch = useDispatch()

    async function handleGetData() {
        await dispatch(getData())
        setReady(true)
    }

    useEffect(() => {
        handleGetData()
    }, [])

    function renderItem({ item }) {
            return (
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => navigation.navigate('Deck', { deckTitle: decks[item].title })}
                >
                    <Text style={styles.deckTitle}>{decks[item].title}</Text>
                    <Text style={styles.deckCards} >{decks[item].questions.length} cards </Text>
                </TouchableOpacity>
            )
    }

    if (ready === false) {
        return <AppLoading />
    }

    return (
        <View style={styles.container}>
            <AppHeader headerText='Flashcards' />
            <FlatList
                data={Object.keys(decks)}
                renderItem={renderItem}
                keyExtractor={item => item}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        margin: 15,
        paddingBottom: 15,
        borderBottomColor: gray,
        borderBottomWidth: 2
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

export default DeckList