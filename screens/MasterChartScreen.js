import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SelectButton } from '../components/SelectButton'
import { ListItem } from '@rneui/themed';
import { Icon } from '@rneui/base';
import { DropdownButton } from '../components/DropdownButton';
let width = Dimensions.get('window').width;

export default function MasterChartScreen() {

  return (
    <View style={styles.container}>
      <DropdownButton title={'Depression'}>
        <Text>   Multiple persistent physical symptoms with no clear cause. </Text>
        <Text>   Low energy, fatigue, sleep problems </Text>
        <Text>   Persistent sadness or depressed mood, anxiety </Text>
      </DropdownButton>
      <DropdownButton title={'PSYCHOSES'}>
        <Text> Marked behavioural changes; neglecting usual responsibilities related to work,  
        school, domestic or social activities 
        </Text>
        <Text>   Agitated, aggressive behavior, decreased or increased activity </Text>
        <Text>   Fixed false beliefs not shared by others in the person’s culture</Text>
        <Text>  Hearing voices or seeing things that are not there</Text>
        <Text>  Lack of realization that one is having mental health problem</Text>
      </DropdownButton>
      <DropdownButton title={'EPILEPSY'}>
        <Text>   Convulsive movement or fits/seizure. </Text>
        <Text>   During the convulsion: loss of consciousness or impaired consciousness, stiffness,  
        rigidity, tongue bite, injury, incontinence of urine or faeces </Text>
        <Text>     After the convulsion: fatigue, drowsiness, sleepiness, confusion, abnormal behaviour,  
        headache, muscle aches, or weakness on one side of the body
        </Text>
      </DropdownButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    // flex:1,
    // alignItems:'center',
    // justifyContent:'center',
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