import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../constants/Colors'
import { Icon } from '@rneui/themed'


export default function ClearNoteButton(props) {
  return (
      <Pressable style={styles.identifier} onPress={props.onPress}> 
         <Text style={styles.identifierText}>Clear Notes</Text>
      </Pressable>
  )
}

const styles = StyleSheet.create({
    identifier:{
    position: 'absolute',
    left:0,
    right: 0,
    top: 0,
    height: 60,
    zIndex: 10,
    justifyContent:'center',
    backgroundColor: 'grey'
  },
  identifierText:{
     fontSize:18,
     marginHorizontal: 20
  },
 })