import React, { useEffect } from 'react'
import { TouchableOpacity, Text, SafeAreaView ,FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from '../actions'


function DeckList() {
    const decks = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getData())
    }, [])
  
    function renderItem({ item }) {
        return (
            <TouchableOpacity>
                <Text>{decks[item].title}</Text>
                <Text>{decks[item].questions.length} cards </Text>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView>
            <FlatList 
                data={Object.keys(decks)}
                renderItem={renderItem}
                keyExtractor={item => item}
            />
        </SafeAreaView>
    )
}

export default DeckList