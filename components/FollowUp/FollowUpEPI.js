import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View, Dimensions, ScrollView} from 'react-native'
let height = Dimensions.get('window').height; //full height

export function FollowUpEPI() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.titleUnderscore}>
            <Text style={styles.title}>Recommendations on frequency of contact for follow up appointments</Text>
        </View>
      <Text style={styles.detail}>» Follow up should occur every 3-6 months.</Text>
      <View style={styles.titleUnderscore}>
        <Text style={styles.title} >1 - REVIEW THE CURRENT CONDITION</Text>
      </View>
      <Text style={styles.subtitle}>Does the person have more than 50% seizure reduction in convulsion frequency?</Text>
      <View>
        <Text style={styles.subtitleUnderscore}>If YES</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={[styles.detail, styles.bold]}>» GO TO 2 - MONITOR TREATMENT.</Text>
      </View>
      
      <Text style={styles.subtitleUnderscore}>If NO</Text>
      <Text style={styles.bold}>IF THE PERSON IS NOT IMPROVING ON CURRENT DOSE</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>» Review adherence to medications.</Text>
        <Text style={styles.detail}>» Consider increase in medication dose as needed to maximal dose if no adverse effects.</Text>
        <Text style={styles.detail}><Text style={styles.bold}>» If response is still poor,</Text></Text>
        <Text style={styles.detail}>{'\u2022'} Consider switching medication. The new medication should be at an optimum dose before slowly discontinuing the first.
                </Text>
        <Text style={[styles.detail, styles.bold]}>» If response is still poor,</Text>
        <Text style={styles.detail}>{'\u2022'} Review Diagnosis
                </Text>
                <Text style={styles.detail}>{'\u2022'} REFER TO A SPECIALIST
                </Text> 
                <Text style={styles.detail}>» Follow-up more frequently.</Text>  
                <Text style={styles.detail}>»  <Text style={[styles.bold]}>ADVERSE EFFECTS.</Text>(e.g. drowsiness, nystagmus, diplopia, ataxia) are from too high doses of medication for the person.</Text>
                <Text style={styles.detail}>»  <Text style={[styles.bold]}>IF THERE IS AN IDIOSYNCRATIC REACTION.</Text>(allergic reaction, bone marrow depression, hepatic failure), switch anti-epileptic medication.</Text>           
      </View>
        
        <View style={styles.titleUnderscore}>
            <Text style={styles.title}>2 - MONITOR TREATMENT</Text>
        </View>
        <Text style={styles.subtitleUnderscore}>At every contact:</Text>
        <View style={styles.detailContainer}>
            <Text style={styles.detail}>» Evaluate side-effects of medication including adverse effects and idiosyncratic reactions (clinically and with appropriate laboratory tests when available).
            </Text>
            <Text style={styles.detail}>» Provide psycho-education and review psychosocial interventions.
            </Text>
            <Text style={[styles.bold,styles.detail]}>» Is the person a woman of childbearing age and considering pregnancy? If so consult a specialist
            </Text>
            <Text style={[styles.bold,styles.detail]}>» Does the patient have any new symptoms of concern?
            </Text>
            <Text style={styles.detail}>» Review for any new symptoms of depression and anxiety given high risk of co-morbidity with epilepsy.
            </Text>
            <Text style={styles.detail}><Text style={styles.bold}>IS THE PATIENT ON ANY NEW MEDICATIONS THAT MAY HAVE INTERACTIONS?</Text>(Many anti-convulsants have interactions with other medications). If so, consult a specialist.
            </Text>
            <Text style={[styles.bold, styles.detail]}> CONSIDER MEDICATION DISCONTINUATION WHEN APPROPRIATE.
            </Text>
            <Text style={[styles.bold, styles.detail]}> HAS THE PERSON BEEN CONVULSION FREE FOR SEVERAL YEARS?
            </Text>
        </View>
        
        <Text style={styles.subtitleUnderscore}>If YES</Text>
        <View style={styles.detailContainer}>
            <Text style={styles.detail}>»<Text style={styles.bold}>Discuss risk of seizure occurence with person/carer </Text> (if epilepsy is due to head injury, stroke or neuro-infection, there is a higher risk of seizure recurrence of medication), and risks and benefits of discontinuing medications.</Text>
            <Text style={styles.detail}>» If in agreement, gradually take the person off medication by reducing the doses over 2 months and monitoring closely for seizure recurrence.</Text>
        </View>
        <Text style={styles.subtitleUnderscore}>IF NO</Text>
        <Text style={[styles.bold, styles.subtitleUnderscore]}>IF THERE ARE NO PROBLEMS WITH MEDICATIONS</Text>
        <View style={styles.detailContainer}>
            <Text style={styles.detail}>» Continue at current dose. Correct dosing is lowest therapeutic dose for seizure control, while minimizing adverse side-effects.</Text>
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
