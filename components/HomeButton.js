import React from 'react'
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native' 
import Ionicons from '@expo/vector-icons/Ionicons';
let width = Dimensions.get('window').width; //full width

export const HomeButton = props => {
    return (
        <View>
            <TouchableOpacity {...props}
                            style={styles.button}
                              onPress={props.onPress}
                              underlayColor={"rgba(1,1,1,0.2)"}>
                <Ionicons name={props.icon} size={30} color="pink" />
                <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
 button:{
    // flex: 5,
    // display: 'flex',
    justifyContent: 'center',
    alignItems:"center",
    backgroundColor: 'grey',
    paddingVertical: 6,
    borderRadius: 5,
    margin:5,
    width: width * 0.45
    
 },
 text:{
    fontSize:17,
    lineHeight:39,
    fontWeight:'bold',
    color:'blue'
 }
})