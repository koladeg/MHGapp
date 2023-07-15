import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { SelectButton } from '../components/SelectButton'
import { colors } from '../constants/Colors';
import { SelectIconButton } from '../components/SelectIconButton';
import ScreenIdentifier from '../components/ScreenIdentifier';
let width = Dimensions.get('window').width;

export default function AssessmentScreen(props) {
  const module = props.route.params.module

  function pressHandler(assess){
    props.navigation.navigate(assess, { module: module})
  }

  return (
    <View style={styles.container}>
      <ScreenIdentifier text={module.name} subtext={"Quick overview"} color={module.color}/>
      <View style={styles.bottomButton}>
          <SelectIconButton style={[styles.button, {backgroundColor: colors.tint}]} type={'font-awesome-5'} iconColor={module.color} icon={'notes-medical'}  title="ASSESSMENT" />
      </View>
      <View style={styles.bottomButton}>
          <SelectIconButton style={[styles.button, {backgroundColor: colors.tint}]} type={'ionicon'} iconColor={module.color} onPress={() => pressHandler('followUp')} icon={'arrow-redo-circle'} title="FOLLOW-UP" />
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