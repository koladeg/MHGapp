import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View, Dimensions, ScrollView} from 'react-native'
let height = Dimensions.get('window').height; //full height

export function FollowUpDEM() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.titleUnderscore}>
            <Text style={styles.title}>Recommendations on frequency of contact for follow up appointments</Text>
        </View>
      <Text style={styles.detail}>» Follow-up at minimum every 3 months.</Text>
      <Text style={styles.detail}>» If on medications, recommend follow-up monthly.</Text>
      <View style={styles.titleUnderscore}>
        <Text style={styles.title} >1 - ASSESS FOR IMPROVEMENT</Text>
      </View>
      <Text style={styles.bold}>Is the person stable? <Text>(no worsening symptoms or decline in function, behavior/psychological symptoms are improving if present).</Text></Text>
      <View>
        <Text style={styles.subtitleUnderscore}>If YES:</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>» Continue management plan.</Text>
        <Text style={[styles.detail, styles.bold]}>» Follow up at minimum every 3 months.</Text>
      </View>
      
      <Text style={styles.subtitleUnderscore}>If NO:</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.bold}>If not on medications</Text>
        <Text style={styles.detail}>Initiate pharmacological intervention, if appropriate.</Text>
        <Text style={styles.detail}><Text style={styles.bold}>» If on medications</Text></Text>
        <Text style={[styles.detail]}>Review adherence, side-effects and dosing. Adjust or consider alternative medication as appropriate.</Text> 
        <Text>» Review psychosocial interventions.</Text>  
        <Text>» Evaluate for medical problems.</Text>   
      </View>


        <View style={styles.titleUnderscore}>
            <Text style={styles.title}>2 - CONDUCT ROUTINE ASSESSMENTS</Text>
        </View>
        <Text style={styles.bold}>At each visit, routinely assess and address the following:</Text>
        <Text style={styles.bold}>» medication side-effects</Text>
        <View style={styles.detailContainer}>
            <Text style={styles.detail}>» If on antipsychotics, check for extrapyramidal symptoms (Go to » PSY). Stop or reduce dose if present
            </Text>
            <Text style={styles.bold}>» Medical and MNS co-morbidities.
            </Text>
            <Text style={styles.bold}>» Ability to participate in activities of daily living and needs of care.
            </Text>
            <Text style={styles.detail}>» <Text style={styles.bold}>Safety risks</Text> and offer appropriate behavior modification if disease has progressed (e.g. limit driving, cooking, e.t.c).
            </Text>
            <Text style={styles.bold}>» New behavioral or psychological symptoms.
            </Text>
            <Text style={styles.detail}>Symptoms of depression (Go to <Text style={styles.bold}>DEP</Text>) or imminent risk of self-harm/suicide (Go to <Text style={styles.bold}>SUI</Text>).
            </Text>
            <Text style={styles.bold}>» Needs of the carers.
            </Text>
            
        </View>
        <View style={styles.titleUnderscore}>
            <Text style={styles.title}>3 - PROVIDE PSYCHOSOCIAL INTERVENTIONS</Text>
        </View>
        <View style={styles.detailContainer}>
            <Text style={styles.bold}>» Continue to promote functioning and provide psychosocial education.</Text>
            <Text style={styles.detail}>See » <Text style={styles.bold}>DEM 2.1-2.5 and ECP</Text> for details.</Text>
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
        marginBottom: 20,
        paddingVertical: 70,
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
