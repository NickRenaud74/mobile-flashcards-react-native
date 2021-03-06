import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { Text, View, StyleSheet, Alert } from 'react-native'
import { Input } from 'react-native-elements'
import AppHeader from './AppHeader'
import { saveDeck } from '../actions'
import CustomButton from './CustomButton'
import { blue } from '../utils/colors'

function AddDeck({ navigation }) {
    const [deckName, setDeckName] = useState('')
    const dispatch = useDispatch()

    function saveDeckTitle() {
        if (deckName.trim() !== '' ) {
            dispatch(saveDeck(deckName))
            navigation.navigate('Deck', {deckTitle: deckName})
            setDeckName('')
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
                inputContainerStyle={{borderRadius: 10}}
                placeholder='Deck Name'
                onChangeText={text => setDeckName(text)}
                value={deckName}
            />
            <CustomButton  
                title='Create Deck'
                onPress={saveDeckTitle}
                color={blue}
            />
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
        borderRadius: 10,
        padding: 15
    }
})

export default AddDeck