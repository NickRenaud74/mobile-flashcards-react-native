import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import reducer from './src/reducers'
import middleware from './src/middleware'
import StackNav from './src/components/StackNav'
import AsyncStorage from '@react-native-async-storage/async-storage'

const store = createStore(reducer, middleware)

export default function App() {

  return (
    <Provider store={store}>
      <StatusBar style='light' />
      <NavigationContainer>
        <StackNav />
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
