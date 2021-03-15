import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { Input } from 'react-native-elements'
import AppHeader from './AppHeader'

function AddDeck() {
    return (
        <View style={{flex: 1}}>
            <AppHeader headerText='Add Deck' />
            <Text>What is the name of your deck?</Text>
            <Input placeholder='Deck Name' />
            <TouchableOpacity>
                <Text>Create Deck</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddDeck