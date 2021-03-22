import React from 'react' 
import { Text, StyleSheet } from 'react-native'

function EmptyDeck() {
    return (
        <Text style={styles.text}>
            Sorry, You cannot take this quiz because there are no cards in this deck.
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        marginTop: 100,
        fontSize: 26,
        textAlign: 'center'
    }
})

export default EmptyDeck