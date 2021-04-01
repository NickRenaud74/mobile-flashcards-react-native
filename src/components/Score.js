import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'
import CustomButton from './CustomButton'
import { blue } from '../utils/colors'
import Quiz from './Quiz'
import {clearNotifications, createNotification} from '../utils/notifications'

function Score({ score, questions, reset }) {
    const percentage = Math.round(score / questions * 100)

    function restart() {
        reset()
        return <Quiz />
    }

    useEffect(() => {
        clearNotifications()
        createNotification()
    });

    return (
        <View style={styles.container}>
            <Text style={styles.scoreText}> You scored {score} out of {questions}</Text>
            <ProgressCircle
                percent={percentage}
                radius={90}
                borderWidth={10}
                color={blue}
                shadowColor="#999"
                bgColor="#fff"
                outerCircleStyle={{ margin: 60}}
            >
                <Text style={styles.percentText}>{`${percentage} %`}</Text>
            </ProgressCircle>
            <CustomButton 
                title='Restart Quiz'
                color={blue}
                onPress={restart}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 50
    },
    scoreText: {
        fontSize: 24,
        textAlign: 'center'
    },
    percentText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: blue
    }
})

export default Score