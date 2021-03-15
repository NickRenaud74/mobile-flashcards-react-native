import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DeckList from './DeckList'
import AddDeck from './AddDeck'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

function TabNav() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon:({ color, size }) =>  {
                    let icon;
                    if (route.name === 'Deck List') {
                        icon = <MaterialCommunityIcons name='cards' size={size} color={color} />
                    } else if (route.name === 'Add Deck') {
                        icon = <FontAwesome name='plus-square' size={size} color={color} />
                    }
                    return icon
                }
            })}
        >
            <Tab.Screen name='Deck List' component={DeckList} />
            <Tab.Screen name='Add Deck' component={AddDeck} />
        </Tab.Navigator>
    )
}

export default TabNav