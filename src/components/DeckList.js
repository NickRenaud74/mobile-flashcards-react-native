import React, { useEffect } from 'react'
import { TouchableOpacity, Text, View , FlatList, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Header } from 'react-native-elements'
import { getData } from '../actions'
import { blue, gray, white } from '../utils/colors'


function DeckList() {
    const decks = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getData())
    }, [])
  
    function renderItem({ item }) {
        return (
            <TouchableOpacity style={styles.item}>
                <Text style={styles.deckTitle}>{decks[item].title}</Text>
                <Text style={styles.deckCards} >{decks[item].questions.length} cards </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Header 
                placement='center'
                centerComponent={{
                     text: 'Deck List', 
                     style: {
                         color: white,
                         fontSize: 28
                        }
                    }}
                containerStyle={{backgroundColor: blue }}
            />
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