import { Icon } from '@rneui/themed'
import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

export const SelectIconButton = props => {
    return (
        <View>
            <TouchableOpacity {...props}
                              onPress={props.onPress}
                              underlayColor={"rgba(1,1,1,0.2)"}>
                <View style={styles.content}>
                    <Icon type={props.type} name={props.icon} size={30} color="pink" />
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
        color: 'black'
    },
    content:{
        flexDirection:'row',
        alignItems: 'center'
    }
})