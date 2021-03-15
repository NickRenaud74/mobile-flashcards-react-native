import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import reducer from './src/reducers'
import TabNav from './src/components/TabNav'
import DeckList from './src/components/DeckList'
import AsyncStorage from '@react-native-async-storage/async-storage'

const store = createStore(reducer, applyMiddleware(thunk))

export default function App() {

  return (
    <Provider store={store}>
      <StatusBar style='light' />
      <NavigationContainer>
        <TabNav />
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
