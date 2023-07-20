import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import { colors } from '../constants/Colors'


export default function RefreshPatients(props) {
  return (
    <View style={[styles.identifier, {backgroundColor: colors.primary}]}>
      <View style={{flex:1, marginLeft: 25}}>
        <Text style={styles.identifierText}>My patients</Text>
      </View>  
      <Pressable style={{alignItem:'flex-end', justifyContent:'flex-end', marginRight: 15}} onPress={() => navigation.dispatch(popAction)}>
          <Icon type={'font-awesome'} name={'refresh'} size={20} color="white" />
      </Pressable>  
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
    height: 60,
    alignItems:'center',
    zIndex: 10
    // justifyContent:'center',
  },
  identifierText:{
     fontSize:18,
     fontWeight:'300',
     color:'white',
     textAlign: 'center'
  },
  subtext:{
     fontWeight: '200',
  }
 })