import React, { useState } from 'react'
import { Text, View, StyleSheet, } from 'react-native'
import { Button } from 'react-native-elements'
import { green, red } from '../utils/colors'
import CustomButton from './CustomButton'

function Quiz({ route, navigation }) {
    const { deckQuiz } = route.params
    const [answered, setAnswered] = useState(0)
    const [score, setScore] = useState(0)
    const [questionIndex, setQuestionIndex] = useState(0)
    const [showAnswer, setShowAnswer] = useState(false)

    function handleCorrect() {
        //set score
        setScore(prevScore => prevScore + 1)
        getNextQuestion()
    }

    function reset() {
        setAnswered(0)
        setQuestionIndex(0)
        setScore(0)
    }

    function getNextQuestion() {
        if (answered === deckQuiz.questions.length) {
            navigation.navigate('Score', {
                score: score, 
                questions: deckQuiz.questions.length,
                reset: reset() 
            })
        }
        //set answered
        setAnswered(prevAnswered => prevAnswered + 1)
        //get next question
        setQuestionIndex(prevIndex => prevIndex + 1)
    }

    return (
        questionIndex > deckQuiz.questions.length -1 ? null :
        <View style={styles.container}>
            <Text>{`${answered} / ${deckQuiz.questions.length}`}</Text>
            <Text>{deckQuiz.questions[questionIndex].question}</Text>
            <Text>{showAnswer ? `${deckQuiz.questions[questionIndex].answer}` : '' }</Text>
            <Button 
                title={showAnswer ? 'Hide Answer' : 'Show Answer'}
                type='clear'
                titleStyle={{ color: red }}
                containerStyle={{ margin: 20 }}
                onPress={() => setShowAnswer(prev => !prev)}
            />
            <CustomButton
                title='Correct'
                color={green}
                onPress={handleCorrect}
            />
            <CustomButton
                title='Incorrect'
                color={red}
                onPress={getNextQuestion}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Quiz
