import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../constants/Colors'

export default function ModeIdentifier() {
  return (
      <View style={styles.identifier}>
        <Text style={styles.identifierText}>No Patient selected (Reference Mode)</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    identifier:{
    position: 'absolute',
    left:0,
    right: 0,
    top: 0,
    height: 70,
    backgroundColor: colors.primary,
    alignItems:'center',
    justifyContent:'center',
  },
  identifierText:{
     fontSize:20,
     color:'white',
  },
 })