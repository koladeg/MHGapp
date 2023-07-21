import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

export const SelectButton = props => {
    return (
        <View>
            <TouchableOpacity {...props}
                              onPress={props.onPress}
                              underlayColor={"rgba(1,1,1,0.2)"}>
                <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    text:{
        fontSize: 17,
        color: 'white'
    }
})