import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomNavigator from './src/navigator/bottomnavigator/BottomNavigator'
import { DataProvider } from './src/context/contex'
import RootNavigator from './src/navigator/rootnavigator/RootNavigator'

const App = ()=> {
  return (
    <DataProvider>
      <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <RootNavigator/>
      </NavigationContainer>
    </SafeAreaView>
    </DataProvider>
  )
}
export default App

const styles = StyleSheet.create({})