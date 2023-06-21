import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { SelectButton } from '../components/SelectButton'
import { colors } from '../constants/Colors';
import { SelectIconButton } from '../components/SelectIconButton';
let width = Dimensions.get('window').width;

export default function AssessmentScreen(props) {
  const module = props.route.params.module

  function pressHandler(name){
    navigation.navigate(category, { name: name})
  }

  return (
    <View style={styles.container}>
      <View style={styles.bottomButton}>
          <SelectIconButton style={[styles.button, {backgroundColor: colors.tint}]} type={'font-awesome-5'} icon={'notes-medical'}  title="ASSESSMENT" />
      </View>
      <View style={styles.bottomButton}>
          <SelectIconButton style={[styles.button, {backgroundColor: colors.tint}]} type={'ionicon'} icon={'arrow-redo-circle'} title="FOLLOW-UP" />
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
    // backgroundColor:'#2c2766',
    padding:20,
    alignItems:"center",
    width:width - 40,
    borderRadius:5,
  },

  bottomButton:{
    marginBottom:10
  }
 })