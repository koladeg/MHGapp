import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'


export default function Search(props) {
  return (
    <View style={styles.identifier}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
            <Icon type={'ionicons'} name={'search'} size={20} color="grey" />
            <TextInput placeholder='Type to filter patients by ID' style={styles.textInput} onChangeText={props.onChangeText} />
        </View>  
      </View>  
    </View>
  )
}

const styles = StyleSheet.create({
    identifier:{
        // flex:1,
    // justifyContent:'center',
  },
  container:{
        height: 70, 
        backgroundColor: 'white', 
        justifyContent: 'center', 
        paddingHorizontal:5
  },
  innerContainer:{
    height: 55, 
    backgroundColor: 'white', 
    flexDirection: 'row', 
    padding: 5, 
    alignItems: 'center'
  },
  textInput:{
     fontSize:18,
     marginLeft: 10
  },
  subtext:{
     fontWeight: '200',
  }
 })