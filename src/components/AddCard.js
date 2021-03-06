import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import CustomButton from './CustomButton'
import { View, StyleSheet, Alert } from 'react-native'
import { Input } from 'react-native-elements'
import { addCardToDeck } from '../actions'
import { blue, white } from '../utils/colors'

function AddCard({ route, navigation }) {
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const dispatch = useDispatch()
    const { deck } = route.params

    function handleSubmit() {
        if (question.trim() !== '' && answer.trim() !== '') {
            const card = { question, answer }
            dispatch(addCardToDeck(deck.title, card))
            setQuestion('')
            setAnswer('')
            navigation.navigate('Deck')
        } else {
            Alert.alert(
                'Please fill out Question and Answer'
            )
        }
    }

    return (
        <View style={styles.container}>
            <Input
                placeholder='Question'
                style={styles.txtInput}
                inputContainerStyle={{ borderRadius: 10 }}
                value={question}
                onChangeText={text => setQuestion(text)}
            />
            <Input
                placeholder='Answer'
                multiline
                style={[styles.txtInput, styles.answer]}
                inputContainerStyle={{ borderRadius: 10 }}
                value={answer}
                onChangeText={text => setAnswer(text)}
            />
            <CustomButton 
                title='Submit Card'
                onPress={handleSubmit}
                color={blue}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    txtInput: {
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        backgroundColor: white
    },
    answer: {
        height: 100,
    }
})

export default AddCard