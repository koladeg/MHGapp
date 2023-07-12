import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View, Dimensions, ScrollView} from 'react-native'
let height = Dimensions.get('window').height; //full height

export function FollowUpOTH() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.titleUnderscore}>
            <Text style={styles.title}>Recommendations on frequency of contact for follow up appointments</Text>
        </View>
      <Text style={styles.detail}>» Ask the person to return in 2-4 weeks if their symptoms do not improve or if, at any time, their symptoms worsen.</Text>
      <View style={styles.titleUnderscore}>
        <Text style={styles.title} >1 - ASSESS FOR IMPROVEMENT</Text>
      </View>
      <Text style={styles.bold}>Is the person improving?</Text>
      <View>
        <Text style={styles.subtitleUnderscore}>If YES:</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>» Continue with treatment plan.</Text>
        <Text style={[styles.detail, styles.bold]}>» Follow up as needed.</Text>
      </View>
      
      <Text style={styles.subtitleUnderscore}>If NO:</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.bold}>If the person is not improving or the person or carer insist on further investigation or treatment.</Text>
        <Text style={styles.bold}>» Review Protocols 1 and 2</Text>  
        <Text style={styles.bold}>» Consider consulting a specialist.</Text>   
      </View>


        
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        margin: 8,
        textAlign: 'center',
    },
    subtitle:{
        // fontSize: 17,
        fontWeight: 'bold',
        lineHeight:39,
        margin: 6,
    },
    titleUnderscore:{
        padding: 6,
        // marginHorizontal: 24,
        borderBottomWidth: 1,
        marginVertical: 21
    },
    subtitleUnderscore:{
        // fontWeight: 'bold',
        margin: 6,
        textDecorationLine: 'underline',
        // marginVertical: 21
    },
    container:{
        marginHorizontal:5,
        marginBottom: 20,
        paddingTop: 70,
    },
    detail:{
        marginVertical: 6,
    },
    bold:{
        fontWeight: 'bold',
    },
    italic:{
        fontStyle: 'italic',
        margin: 6,
    },
    detailContainer:{
        margin:6
    },
    underline:{
        textDecorationLine: 'underline',
    }
})

