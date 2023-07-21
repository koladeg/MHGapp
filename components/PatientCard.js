import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import { colors } from '../constants/Colors';
import { Icon } from '@rneui/themed';
let width = Dimensions.get('window').width;


const PatientCard = (props) => {
    return (
        <View style={[styles.container, { backgroundColor: props.color}]}>
            <View style={styles.unit}>
                <Text style={styles.subtitle}>{props.data.id}</Text>
            </View>
            <View style={[styles.unit]}>
                {props.data.lastAssessment < 1 ? (<Text style={styles.subtitle}>-</Text>) : (<Text style={styles.subtitle}>{props.data.lastAssessment}</Text>) }
            </View>
            <View style={styles.unit}>
            {props.data.weeksLastAssessment < 1 ? (<Text style={styles.subtitle}>-</Text>) : (<Text style={styles.subtitle}>{props.data.weeksLastAssessment}</Text>) }
            </View>
            <View style={styles.unit}>
            {props.data.followUps < 1 ? (<Text style={styles.subtitle}>-</Text>) : (<Text style={styles.subtitle}>{props.data.followUps}</Text>) }
            </View>
            <View style={styles.unit}>
            {props.data.nextFollowUp < 1 ? (<Text style={styles.subtitle}>-</Text>) : (<Text style={styles.subtitle}>{props.data.nextFollowUp}</Text>) }
            </View>
            <View style={styles.unit}>
                {props.data.SP < 1 && (<Text style={styles.subtitle}>-</Text>)}
                {
                    props.data.SP && <Icon type={'ionicons'} name={'flag'} size={20} color={colors.secondary} />
                }
            </View>
        </View>
    );
}

export default PatientCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding:12,
        height: 100,
        // backgroundColor: colors.secondary
    },
    unit:{
        width: width * 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 29
    },
    subtitle:{
        fontSize:16,
        fontWeight: '200',
        textAlign: 'center'
    },

})