import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../constants/Colors'
import { Icon } from '@rneui/themed'
import { StackActions, useNavigation } from '@react-navigation/native';

const popAction = StackActions.pop(1)

export default function ScreenIdentifier(props) {
    const navigation = useNavigation();
  return (
      <View style={[styles.identifier, {backgroundColor: props.color}]}>
        <Pressable style={{marginLeft: 10}} onPress={() => navigation.dispatch(popAction)}>
            <Icon type={'ionicon'} name={'chevron-back'} size={30} color="white" />
        </Pressable>  
        <View style={{flex:1, paddingRight: 50}}>
         <Text style={styles.identifierText}>{props.text}</Text>
        </View>  
      </View>
  )
}

const styles = StyleSheet.create({
    identifier:{
    position: 'absolute',
    flexDirection: 'row',
    left:0,
    right: 0,
    top: 0,
    height: 70,
    alignItems:'center',
    zIndex: 10
    // justifyContent:'center',
  },
  identifierText:{
     fontSize:20,
     color:'white',
     textAlign: 'center'
  },
 })