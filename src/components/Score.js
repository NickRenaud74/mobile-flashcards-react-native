import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Score({score, questions, reset}) {
    const percentage = Math.round(score / questions * 100)
    return (
        <View style={styles.container}>
            <Text> You scored {score} out of {questions}</Text>
            <Text>{percentage} %</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 50
    },
})

export default Score