import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../constants/Colors'
import { Icon } from '@rneui/themed'

export default function InputField(props) {
  return (
    <View>
      <Text style={styles.inputText} >{props.label}</Text>
      <View style={styles.icon}>
        <Icon name={props.icon} type={props.iconType} color={colors.secondary}
        />
      </View>
      <TextInput
        style={styles.textInput}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secure ? props.secure : false}
        keyboardType={props.keyboardType ? props.keyboardType : "default"}
        placeholder={props.placeholder}
        placeholderTextColor={'grey'}
        value={props.value}
       />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    innerContainer:{
        flex:1,
        width: '100%',
        alignItems: 'center'
    },
    inputText:{
      textAlign: 'left'
    },
    icon:{
       position: 'absolute',
       left: 15,
       top: 38,
       zIndex: 1
    },
    textInput:{
      backgroundColor: 'white',
      padding: 15,
      paddingLeft: 55,
      paddingRight: 55,
      borderRadius: 5,
      fontSize: 17,
      height: 60,
      marginVertical:3,
      marginBottom: 10,
      // color: 'pink'
    }
   })