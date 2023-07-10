import { View, Text, StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import InputField from '../components/InputField'
import { SelectButton } from '../components/SelectButton';
import GradientButton from '../components/GradientButton'
import { colors } from '../constants/Colors';
let width = Dimensions.get('window').width;

export default function RegisterScreen({props}) {
  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.form}>
            <InputField
              label="User name"
              icon="person"
              iconType="ionicon"
              placeholder="Adeola"
              // onChangeText={handleChange('email')}
              // value={value.email}
            />

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
              label="Phone number"
              icon="call"
              iconType="ionicon"
              placeholder="0123212"
              // onChangeText={handleChange('password')}
              // value={value.password}
              keyboardType="numeric"
              // isPassword=true
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
            <InputField
              label="Repeat Password"
              icon="lock-closed"
              iconType="ionicon"
              placeholder="* * * * * *"
              // onChangeText={handleChange('password')}
              // value={value.password}
              keyboardType="email-address"
              secure={true}
              // isPassword=true
            />
          </View>
          

          <View style={ [styles.buttons, {marginTop: 10}]}>
            <SelectButton style={[styles.button, {backgroundColor: colors.sui}]} title={"Cancel"} />
            <GradientButton 
              text={'Create User'}
              style={styles.button}
            />
          </View>
        </View>
      {/* <Text>LoginScreen</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      padding: 20,
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
       color:'blue',
       textDecorationLine: 'underline',
      textDecorationColor: "blue",
      textAlign: 'right',
    },
    form:{
      width:'90%',
    },
    button:{
      width:width/2.5,
      borderRadius:5,
      padding:20,
      marginHorizontal: 20,
      alignItems: 'center'
    },
    buttons:{
      flexDirection: 'row',
      // alignItems: 'center',
      justifyContent: 'space-between'
    },
  

   })