import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabNav from './TabNav'
import Deck from './Deck'
import AddCard from './AddCard'
import EmptyDeck from './EmptyDeck'
import { blue, white } from '../utils/colors'
import Quiz from './Quiz'

const Stack = createStackNavigator()

function StackNav() {
    return (
        <Stack.Navigator 
            headerMode='screen'
            screenOptions={{
                headerStyle: {
                    backgroundColor: blue,
                    height: 100
                },
                headerTintColor: white,
                headerTitleStyle: {
                    fontSize: 24,
                }
            }}
        >
            <Stack.Screen 
                name='Home' 
                component={TabNav}  
                options={{ headerShown: false, title: 'Flashcards' }} 
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
            <Stack.Screen
                name='Empty Deck'
                component={EmptyDeck}
            />
            <Stack.Screen 
                name='Quiz'
                component={Quiz}
            />
        </Stack.Navigator>
    )
}

export default StackNav