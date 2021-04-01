import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import reducer from './src/reducers'
import middleware from './src/middleware'
import StackNav from './src/components/StackNav'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { requestPermissionsAsync, allowsNotificationsAsync } from './src/utils/notifications'

const store = createStore(reducer, middleware)

export default function App() {

  //To re-initialize data, un-comment this line
  //AsyncStorage.clear()

  useEffect(() => { allowsNotificationsAsync() ? null : requestPermissionsAsync() })

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
