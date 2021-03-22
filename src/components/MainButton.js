import React from 'react' 
import { Button } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import { blue } from '../utils/colors'

function MainButton({ title, onPress }) {
    return (
        <Button 
        title={title}
        type='solid'
        raised
        buttonStyle={styles.createDeck}
        containerStyle={styles.btnContainer}
        titleStyle={{fontSize: 22}}
        onPress={onPress}
    />
    )
}

const styles = StyleSheet.create({
    createDeck: {
        backgroundColor: blue,
        padding: 15,
        borderRadius: 10
    },
    btnContainer: {
        margin: 20, 
        borderRadius: 10
    }
})

export default MainButton