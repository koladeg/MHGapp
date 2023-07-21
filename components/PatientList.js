import React from 'react';
import {View, Text, FlatList, StyleSheet, ScrollView} from 'react-native';
import PatientCard from './PatientCard';
import PatientHeaderCard from './PatientHeaderCard';


const PatientList = (props) => {
    let colors = ['white', '#e3e0d8']
    return (
        <ScrollView
            style={{flex: 1}}
            numColumns={6}
            directionalLockEnabled={false}
            horizontal={true}>
            <FlatList
                data={props.data}
                renderItem={({item, index}) =>
                    <PatientCard data={item} color={colors[index % colors.length]} />
                }
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={<PatientHeaderCard />}
                // stickyHeaderIndices={[0]}
            />

        </ScrollView>
    );
}

export default PatientList;

const styles = StyleSheet.create({
    // container:{
    //     flex:1
    // },

});