import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { SelectButton } from '../components/SelectButton'
let width = Dimensions.get('window').width;

export default function MasterChartScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.bottomButton}>
          <SelectButton style={styles.button}  title="Emergency Presentation" />
      </View>
      <View style={styles.bottomButton}>
          <SelectButton style={styles.button} title="Overview of Priority MNS Conditions" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  button:{
    backgroundColor:'#2c2766',
    padding:20,
    alignItems:"center",
    width:width - 40,
    borderRadius:5,
  },
  text:{
      fontSize: 17,
      color: 'white'
  },
  bottomButton:{
    marginBottom:10
  }
 })