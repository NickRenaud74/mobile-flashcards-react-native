import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabNav from './TabNav'
import Deck from './Deck'
import AddCard from './AddCard'
import { blue, white } from '../utils/colors'


const Stack = createStackNavigator()

function StackNav() {
    return (
        <Stack.Navigator 
            headerMode='screen'
            screenOptions={{
                headerStyle: {
                    backgroundColor: blue,
                    height: 75
                },
                headerTintColor: white
            }}
        >
            <Stack.Screen 
                name='Home' 
                component={TabNav}  
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name='Deck'
                component={Deck}
                options={({ route }) => ({title: route.params.deckTitle})}
            />
            <Stack.Screen 
                name='Add Card'
                component={AddCard}
            />
        </Stack.Navigator>
    )
}

export default StackNav