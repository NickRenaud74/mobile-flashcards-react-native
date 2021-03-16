import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Input } from 'react-native-elements'
import AppHeader from './AppHeader'
import { saveDeck } from '../actions'
import { blue, white } from '../utils/colors'

function AddDeck({ navigation }) {
    const [deckName, setDeckName] = useState('')
    const dispatch = useDispatch()

    function saveDeckTitle() {
        if (deckName.trim() !== '' ) {
            dispatch(saveDeck(deckName))
            setDeckName('')
            navigation.navigate('Deck List')
        } else {
            Alert.alert (
                'Deck Name Missing',
                'Please enter the name of your deck'
            )
        }
    }

    return (
        <View style={styles.container}>
            <AppHeader headerText='Add Deck' />
            <Text style={styles.txt}>What is the name of your deck?</Text>
            <Input 
                style={styles.deckName}
                placeholder='Deck Name'
                onChangeText={text => setDeckName(text)}
                value={deckName}
            />
            <TouchableOpacity style={styles.submit} onPress={saveDeckTitle} >
                <Text style={styles.btnText} >Create Deck</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    txt: {
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    deckName: {
        marginTop: 20,
        borderWidth: 2,
        padding: 15
    },      
    submit: {
        backgroundColor: blue,
        padding: 10,
        borderRadius: 10,
        margin: 40
    },
    btnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    }
})

export default AddDeck