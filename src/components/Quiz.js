import React, { useState, useRef } from 'react'
import { Text, View, StyleSheet, Animated, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'
import { blue, gray, green, red } from '../utils/colors'
import CustomButton from './CustomButton'

function Quiz({ route, navigation }) {
    const { deckQuiz } = route.params
    const [answered, setAnswered] = useState(0)
    const [score, setScore] = useState(0)
    const [questionIndex, setQuestionIndex] = useState(0)
    const [showAnswer, setShowAnswer] = useState(false)
    const visible = useRef(new Animated.Value(0)).current

    function handleCorrect() {
        //set score
        setScore(prevScore => prevScore + 1)
        getNextQuestion()
    }

    function fade() {
        setShowAnswer(prev => !prev)
        showAnswer ? fadeOut() : fadeIn()
    }

    function fadeIn() {
        Animated.timing(visible, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start()
    }

    function fadeOut() {
        Animated.timing(visible, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start()
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
        questionIndex > deckQuiz.questions.length - 1 ? null :
            <View style={styles.container}>
                <Text style={styles.questIndex}>
                    {`${answered} / ${deckQuiz.questions.length}`}
                </Text>
                <View>
                    <Text style={styles.question}>
                        {deckQuiz.questions[questionIndex].question}
                    </Text>
                    <Animated.Text style={[styles.answer, { opacity: visible }]}>
                        {showAnswer && `${deckQuiz.questions[questionIndex].answer}`}
                    </Animated.Text>
                    <Button
                        title={showAnswer ? 'Hide Answer' : 'Show Answer'}
                        type='clear'
                        titleStyle={{ color: red }}
                        containerStyle={{ margin: 20 }}
                        onPress={fade}
                    />
                </View>
                <View>
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
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly'
    },
    questIndex: {
        fontSize: 18,
        padding: 15,
        color: blue,
        fontWeight: 'bold',
    },
    question: {
        padding: 15,
        fontSize: 22
    },
    answer: {
        borderWidth: 2,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.1)',
        marginLeft: 15,
        marginRight: 15,
    }
})

export default Quiz
