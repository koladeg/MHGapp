import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import InputField from '../components/InputField'
import GradientButton from '../components/GradientButton'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
            <Image resizeMode={'cover'} source={require('../assets/images/mhgapLogo.png')} />

        <View style={styles.form}>
          <InputField
            label="User email"
            icon="mail"
            iconType="ionicon"
            placeholder="abc@gmail.com"
            // onChangeText={handleChange('email')}
            // value={value.email}
            keyboardType="email-address"
           />

          <InputField
            label="Password"
            icon="lock-closed"
            iconType="ionicon"
            placeholder="* * * * * *"
            // onChangeText={handleChange('password')}
            // value={value.password}
            keyboardType="email-address"
            secure={true}
            // isPassword=true
           />

          <GradientButton 
            text={'login'}
            style={[styles.button, {marginVertical: 50}]}
          />
        </View>
        </View>
      {/* <Text>LoginScreen</Text> */}
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
      flex:1,
      padding: 25,
      // paddingTop: 10
    },
    innerContainer:{
        flex:1,
        width: '100%',
        alignItems: 'center'
    },
    image:{
      width:250,
      // alignItems:'center',
      height:200,
    },
    text:{
       fontSize:17,
       lineHeight:39,
       fontWeight:'bold',
       color:'blue'
    },
    form:{
      width:'90%',
    },
    button:{
      flex:2,
      paddingHorizontal:15,
      alignItems:"center",
      // width:width - 40,
      borderRadius:5,
    },
   })