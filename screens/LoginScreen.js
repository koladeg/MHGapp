import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
            <Image resizeMode={'cover'} source={source={require('../assets/images/mhgapLogo.png')} />
        </View>
      {/* <Text>LoginScreen</Text> */}
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
      flex:1,
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
    }
   })