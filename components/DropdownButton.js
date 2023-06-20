import React, { useState } from 'react'
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native' 
import { CheckBox, ListItem } from '@rneui/themed';
import { Icon } from '@rneui/base';
let width = Dimensions.get('window').width; //full width
import { useNavigation } from '@react-navigation/native';


export const DropdownButton = props => {
    const [expanded, setExpanded] = useState(false)
    const [checked, setChecked] = useState(false);
    const toggleCheckbox = () => setChecked(!checked);
    return (
        <View style={styles.container}>
            <ListItem.Accordion
                content={
                <>
                    <CheckBox
                        checked={checked}
                        onPress={toggleCheckbox}
                        iconType="material-community"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon={'checkbox-blank-outline'}
                    />
                    <ListItem.Content>
                    <ListItem.Title style={[styles.title, {color: props.color}]}>{props.title}</ListItem.Title>
                    </ListItem.Content>
                </>
                }
                isExpanded={expanded}
                onPress={() => {
                setExpanded(!expanded);
                }}
            >
            {props.children}
                
            </ListItem.Accordion>
        </View>
    )
}


const styles = StyleSheet.create({
 button:{
    // flex: 5,
    // display: 'flex',
    justifyContent: 'center',
    alignItems:"center",
    paddingVertical: 6,
    borderRadius: 5,
    margin:5,
    width: width * 0.45
    
 },
 title:{
    fontWeight: 'bold',
    fontSize: 18,

 },
 container:{
    fontSize:17,
    lineHeight:39,
    fontWeight:'bold',
    color:'blue'
 }
})