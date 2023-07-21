import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import { colors } from '../constants/Colors';
let width = Dimensions.get('window').width;


const PatientHeaderCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.unit}>
                <Text style={styles.subtitle}>Patient ID</Text>
            </View>
            <View style={styles.unit}>
                <Text style={styles.subtitle}>Date last assessment</Text>
            </View>
            <View style={styles.unit}>
                <Text style={styles.subtitle}># Weeks since last assessment</Text>
            </View>
            <View style={styles.unit}>
                <Text style={styles.subtitle}># Follow ups</Text>
            </View>
            <View style={styles.unit}>
                <Text style={styles.subtitle}>Next follow up</Text>
            </View>
            <View style={{width: width * 0.11, justifyContent: 'center'}}>
                <Text style={styles.subtitle}>SP</Text>
            </View>
        </View>
    );
}

export default PatientHeaderCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding:8,
        height: 100,
        backgroundColor: colors.secondary
    },
    unit:{
        width: width * 0.2,
        justifyContent: 'center'
    },
    subtitle:{
        fontSize:16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },

})