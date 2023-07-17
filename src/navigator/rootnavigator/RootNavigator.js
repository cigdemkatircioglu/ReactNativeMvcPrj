import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { create } from 'react-test-renderer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DataContext } from '../../context/contex'
import BottomNavigator from '../bottomnavigator/BottomNavigator'
import AuthNavigator from '../authnavigator/AuthNavigator'

const RootNavigator = () => {
    const{userAvaible}=useContext(DataContext)

    const RootStack=createNativeStackNavigator()

  return (
    <>
        {userAvaible==true?(<BottomNavigator/>) :(<AuthNavigator/>)}</>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})