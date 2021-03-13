import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './src/reducers'
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './src/components/DeckList'
import AsyncStorage from '@react-native-async-storage/async-storage'

const store = createStore(reducer, applyMiddleware(thunk))

export default function App() {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <DeckList />
      </View>
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
});
