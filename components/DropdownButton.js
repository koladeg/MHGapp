import React, { useState } from 'react'
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native' 
import { ListItem } from '@rneui/themed';
import { Icon } from '@rneui/base';
let width = Dimensions.get('window').width; //full width
import { useNavigation } from '@react-navigation/native';


export const DropdownButton = props => {
    const [expanded, setExpanded] = useState(false)

    return (
        <View style={styles.container}>
            <ListItem.Accordion
                content={
                <>
                    <Icon name="place" size={30} />
                    <ListItem.Content>
                    <ListItem.Title>{props.title}</ListItem.Title>
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
 container:{
    fontSize:17,
    lineHeight:39,
    fontWeight:'bold',
    color:'blue'
 }
})