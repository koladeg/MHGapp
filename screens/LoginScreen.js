import { View, Text, StyleSheet, Image, Dimensions, Pressable, ScrollView } from 'react-native'
import React from 'react'
import InputField from '../components/InputField'
import GradientButton from '../components/GradientButton'
import { SelectButton } from '../components/SelectButton';
import { colors } from '../constants/Colors';
let width = Dimensions.get('window').width;

const LoginScreen = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
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
          </View>
          

          <GradientButton 
            text={'Login'}
            style={styles.button}
          />
          <Pressable style={{alignSelf: 'flex-end'}}>
            <Text style={styles.text} >Forgot my password</Text>
          </Pressable>

          <Text style={{ paddingTop: 20}} >Not Registered?</Text>
          <View style={{marginTop: 10}}>
              <SelectButton style={[styles.button2, {backgroundColor: colors.secondary}]} title={"Register"} onPress={() => props.navigation.navigate('register')} />
          </View>
        </View>
      {/* <Text>LoginScreen</Text> */}
    </ScrollView>
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
       color:'blue',
       textDecorationLine: 'underline',
      textDecorationColor: "blue",
      textAlign: 'right',
    },
    form:{
      width:'90%',
    },
    button:{
      // flex:2,
      padding:15,
      alignItems:"center",
      width:width - 40,
      borderRadius:5,
      marginVertical: 20
    },
    button2:{
      // backgroundColor:'#2c2766',
      padding:20,
      alignItems:"center",
      width:width - 40,
      borderRadius:5,
    },

   })