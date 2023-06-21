import React from 'react'
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native' 
let width = Dimensions.get('window').width; //full width
let height = Dimensions.get('window').height; //full height
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import { colors } from '../constants/Colors';



export const HomeButton = props => {
    const navigation = useNavigation();
    return (
        <View style={styles.block}>
            <TouchableOpacity {...props}
                            style={[styles.button, {backgroundColor: colors.tint}]}
                              onPress={() => navigation.navigate(props.screen, { category: props.title })}
                              underlayColor={"rgba(1,1,1,0.2)"}>
                    <View style={styles.innerBlock}>
                        <Icon type={props.type} name={props.icon} size={40} color="pink" />
                        <Text style={styles.text}>{props.title}</Text>
                    </View>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
 block:{
    flex:1,
    margin:15,
    height: height * 0.25,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8
 },
 innerBlock:{
    flex:1,
    padding:16,
    justifyContent: 'center',
    alignItems:"center",
 },
 button:{
    flex: 1,
 },
 text:{
    fontSize:17,
    lineHeight:39,
    fontWeight:'bold',
    color:'blue'
 }
})