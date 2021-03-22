import React from 'react' 
import { Button } from 'react-native-elements'
import { StyleSheet } from 'react-native'

function CustomButton({ title, onPress, color }) {
    return (
        <Button 
        title={title}
        type='solid'
        raised
        buttonStyle={[styles.createDeck, {backgroundColor: color}]}
        containerStyle={styles.btnContainer}
        titleStyle={{fontSize: 22}}
        onPress={onPress}
    />
    )
}

const styles = StyleSheet.create({
    createDeck: {
        padding: 15,
        borderRadius: 10
    },
    btnContainer: {
        margin: 20, 
        borderRadius: 10
    }
})

export default CustomButton