import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View, Dimensions, ScrollView} from 'react-native'
let height = Dimensions.get('window').height; //full height

export default function FollowUpPSY() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.titleUnderscore}>
            <Text style={styles.title}>Recommendations on frequency of contact for follow-up appointments</Text>
        </View>
      <Text style={styles.detail}>» Initial follow up should be as frequent as possible, even daily, until acute symptoms respond to treatment.</Text>
      <Text style={styles.detail}>» Regular follow-up is needed. once symptoms respond, monthly to quarterly follow-up is recommended(based on clinical need and feasibility factors such as staff availability, distance from clinic,e.t.c.)</Text>
      <View style={styles.titleUnderscore}>
        <Text style={styles.title} >1 - ASSESS FOR IMPROVEMENT</Text>
      </View>
      <Text style={styles.subtitle}>Is the person improving?</Text>
      <View>
        <Text style={styles.subtitleUnderscore}>If YES:</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>» Continue with treatment plan.</Text>
        <Text style={[styles.detail, styles.bold]}>» Decrease the frequency of follow-up once symptoms have subsided.</Text>
        <Text style={styles.detail}>» Follow up as needed.</Text>
        <Text style={[styles.detail, styles.italic]}>Go to 2 - routinely monitor treatment.</Text>
      </View>
      
      <Text style={styles.subtitleUnderscore}>If NO:</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}><Text style={styles.bold}>If the person is taking Medication</Text></Text>        
        <Text style={styles.detail}>» Ensure that person has been on typical effective dose for minimum of 4-6 weeks</Text>
        <Text style={styles.detail}><Text style={styles.bold}>» Maintain a high frequency of contact until symptoms start to respond to treatment</Text></Text>
        <Text style={[styles.detail, styles.bold]}>» Involve the person and carers in treatment plan changes and decision.</Text>      
      </View>
      <Text style={[styles.bold, styles.detail]}></Text>
        <Text style={[styles.detail, styles.bold]}><Text style={styles.underline}>If the person is NOT taking medication</Text></Text>
        <Text style={[styles.bold, styles.detail]}>START ANTIPSYCHOTIC MEDICATIONS (Go to Table 1)</Text>
        <Text style={styles.detail}>» Maintain a high frequncy of contact until symptoms start to respond to treatment.</Text>
        <Text style={styles.detail}>» Involve the person and carers in treatment plan changes and decisions.</Text>
        <View style={styles.detailContainer}>
            
        </View>
        <View style={styles.titleUnderscore}>
            <Text style={styles.title}>2 - ROUTINELY MONITOR TREATMENT</Text>
        </View>
        <Text style={[styles.bold,styles.subtitleUnderscore]}>Review psychosocial interventions.</Text>
        <View style={styles.detailContainer}>
            <Text style={styles.detail}>» If on medication, review adherence, side effects and dosing (Table 4).
            </Text>
            <Text style={styles.detail}>» Check on weight, blood pressure, and blood glucose.
            </Text>
            <Text style={styles.detail}>» If the person starts to use any other medication with potential drug-drug interactions, consider reviewing the medication dose.
            </Text>
            <Text style={styles.detail}>» If the person starts to use any other medication with potential drug-drug interactions, consider reviewing the medication dose.
            </Text>
            <Text style={styles.detail}>»Ask regarding the onset of symptoms, prior episodes, and details of any previous or current treatment.
            </Text>
        </View>
        <View style={styles.titleUnderscore}>
            <Text style={styles.title}>3 - CONSIDER DISCONTINUING MEDICATIONS</Text>
        </View>
        <Text>{'\u2022'} Person with first episode, relapse, or worsening of psychosis symptoms</Text>
        <View style={styles.detailContainer}>
            <Text style={styles.detail}>» Consider discontinuation of medications <Text style={[styles.detail, styles.bold]}> 12 MONTHS after symptoms have been resolved</Text> </Text>
            <Text style={styles.detail}>{'\u2022'} Person with psychotic symptoms persisting more than 3 months.</Text>
            <Text style={styles.detail}>» Consider discontinuation of medications <Text style={[styles.detail, styles.bold]}> if person is in FULL REMISSION of symptoms for several years</Text> </Text>
        </View>
        <Text style={[styles.bold]}>{'\u2022'} In all Cases:</Text>
        <View style={styles.detailContainer}>
            <Text style={styles.detail}>» Discuss risks of relapse against long-term medication side-effects with person and family.</Text>
            <Text style={styles.detail}>» If possible, consult a specialist.</Text>
            <Text style={styles.detail}>» Gradually and slowly reduce the medication dose When medications are withdrawn, individuals and family members need to be educated to detect early symptoms of relapse.</Text>
            <Text style={styles.detail}>» Close clinical monitoring is recommended.</Text>
        </View>
        <View style={styles.titleUnderscore}>
            <Text style={styles.title}>MANIC EPISODE IN BIPOLAR DISORDER</Text>
            <Text style={styles.title}>Recommendations on frequency of contact for follow up appointments</Text>
        </View>
        <Text style={styles.bold}>» For acute mania: Initail follow-up should be as frequent as possible, even daily,until acute symptoms respond to treatment. Once symptoms respond, monthly to quaterly follow-up is recommended.</Text>
        <View style={styles.detailContainer}>
            <Text style={[styles.bold, styles.detail]}>» For persons not currently in manic or depressed states, follow-up at least every three months. Consider more frequent follow-up when needed. Monitor closely for relapse. </Text>
        </View>
        <View style={styles.titleUnderscore}>
        <Text style={styles.title} >1 - ASSESS FOR IMPROVEMENT</Text>
      </View>
      <Text style={styles.subtitle}>Is the person improving?</Text>
      <View>
        <Text style={styles.subtitleUnderscore}>IF YES:</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>» Follow up as needed until symptoms have subsided.</Text>
        <Text style={[styles.detail, styles.bold]}>» Continue maintenance medication for at least 2 years.</Text>
        <Text style={styles.detail}>» Go to 2 - routinely monitor treatment.</Text>
      </View>
      <View>
        <Text style={styles.subtitleUnderscore}>IF NO:</Text>
        <Text style={styles.subtitleUnderscore}>If the person is taking medication</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>» Check the dosing and side effects. Go to  <Text style={[styles.detail, styles.bold]}>Table 1 or Table 3</Text>.</Text>
        <Text style={[styles.detail, styles.bold]}>»Ensure that person has been on typical effective dose of medication for a minimum of four to six weeks.</Text>
        <Text style={styles.detail}>» If on typical effective dose of medications for four to six weeks with no improvement, considering switching medication. See  <Text style={[styles.detail, styles.bold]}>Table 3</Text>.</Text>
        <Text style={styles.detail}>» If response is still poor, consult a specialist.</Text>
      </View>
      <View>
        <Text style={[styles.bold, styles.subtitleUnderscore]}>CLINICAL TIP: </Text><Text style={styles.detail}>If switching to another medication, begin that medicationfirst and treat with both medications for 2 weeks before tapering off the first medication.</Text>
        <Text style={[styles.bold, styles.subtitleUnderscore]}>If the person is NOT taking medication</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>» If appropriate, initiate medication.</Text>
      </View>
      <View>
        <Text style={[styles.bold, styles.subtitleUnderscore]}>In all cases:</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>» Review psychosocial interventions.</Text>
        <Text style={styles.detail}>» Evaluate for medical problems.</Text>
      </View>
      <View style={styles.titleUnderscore}>
            <Text style={styles.title}>2 - ROUTINELY MONITOR TREATMENT</Text>
        </View>
        <Text style={styles.bold}>» Review and provide psychosocial interventions.</Text>
        <View style={styles.detailContainer}>
            <Text style={[styles.detail, styles.bold]}>» If on medication, review adherence, side effects and dosing (Table 4).
            </Text>
            <Text style={styles.detail}>» If the person starts to use any other medication with potential drug-drug interactions, consider reviewing the medication dose.
            </Text>
        </View>
        <View style={styles.titleUnderscore}>
            <Text style={styles.title}>3 - CONSIDER DISCONTINUING MEDICATIONS</Text>
        </View>
        <Text style={[styles.bold,styles.detail]}> Has the person been in full remission of symptoms with no episodes of bipolar disorder for at least two years? </Text>
        <Text style = {styles.subtitleUnderscore}>IF YES</Text>
        <Text style={[styles.detail, styles.bold]}>» Consider discontinuation of medications.</Text>
        <Text>   {'\u2022'} Discuss with person/carer the risk of discontinuation.</Text>
        <Text>   {'\u2022'} Consult a specialist regarding the decision to discontinue maintenance treatment after 2 years.</Text>
        <Text>   {'\u2022'} Reduce gradually over a period of weeks or months.</Text>
        <Text style = {styles.subtitleUnderscore}>IF NO</Text>
        <Text style={[styles.detail, styles.bold]}>» Routinely follow up and monitor treatment.</Text>
        
        
        
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
