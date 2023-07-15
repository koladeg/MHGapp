import React from 'react'
import {Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

export const SelectButton = props => {
    return (
        <View>
            <Pressable {...props}
                              onPress={props.onPress}
                              underlayColor={"rgba(1,1,1,0.2)"}>
                <Text style={styles.text}>{props.title}</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    text:{
        fontSize: 17,
        color: 'white'
    }
})