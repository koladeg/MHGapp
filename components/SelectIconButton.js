import { Icon } from '@rneui/themed'
import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View, Dimensions} from 'react-native'
let height = Dimensions.get('window').height; //full height

export const SelectIconButton = props => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity {...props}
                              onPress={props.onPress}
                              underlayColor={"rgba(1,1,1,0.2)"}>
                <View style={styles.content}>
                    <Icon type={props.type} name={props.icon} size={30} color={props.iconColor} />
                    <View style={{flex:1, alignItems:'center'}}>
                    <Text style={styles.text}>{props.title}</Text>
                    </View>
                </View>              
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    text:{
        fontSize: 17,
        lineHeight:39,
        color: 'black'
    },
    content:{
        // flex:1,
        justifyContent: 'center',
        alignItems:"center",
        flexDirection:'row',
    },
    buttonContainer:{
        // flex:1,
        margin:15,
        // height: height * 0.25,
        borderRadius: 8,
        elevation: 4,
        // backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8
    },
})