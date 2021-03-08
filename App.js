import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './src/reducers'
import { StyleSheet, Text, View } from 'react-native';


const store = createStore(reducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>MOBILE FLASHCARDS!</Text>
        <StatusBar style="auto" />
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
