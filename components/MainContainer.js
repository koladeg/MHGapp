import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Header from './Header'
import { colors } from '../constants/Colors'

export const MainContainer = props => {
  return (
    <SafeAreaProvider style={styles.container}>
        <Header />
      {props.children}
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
      }
})