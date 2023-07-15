import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View, Dimensions, ScrollView} from 'react-native'
let height = Dimensions.get('window').height; //full height

export function FollowUpDEP() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.titleUnderscore}>
            <Text style={styles.title}>Recommendations on frequency of contact for follow up appointments</Text>
        </View>
      <Text style={styles.detail}>» Schedule the second appointment within 1 week.</Text>
      <Text style={styles.detail}>» Initially maintain regular contact via telephone, home visits, letters, or contact cards more frequently, e.g. monthly, for the first 3 months.</Text>
      <View style={styles.titleUnderscore}>
        <Text style={styles.title} >1 - ASSESS FOR IMPROVEMENT</Text>
      </View>
      <Text style={styles.subtitle}>Is the person improving?</Text>
      <View>
        <Text style={styles.subtitleUnderscore}>If YES:</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>» Encourage the person to continue with their current management plan until they are symptom free for 9-12 months.</Text>
        <Text style={[styles.detail, styles.bold]}>» Arrange a further follow up appointment in 1-2 weeks.</Text>
        <Text style={styles.detail}>» Decrease contact as the person’s symptoms improve, e.g. once every 3 months after the initial 3 months.</Text>
        <Text style={[styles.detail, styles.italic]}> Note: follow up should continue until the person no longer has any symptoms of depression.</Text>
      </View>
      
      <Text style={styles.subtitleUnderscore}>If NO:</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}><Text style={styles.bold}>If not yet receiving psychological treatment</Text>, consider psychological treatment.</Text>
        <Text style={styles.detail}>» If receiving a psychological treatment, evaluate engagement in and experience of current psychological treatment.</Text>
        <Text style={styles.detail}><Text style={styles.bold}>» If not yet on antidepressants</Text>,  consider antidepressants.</Text>
        <Text style={[styles.detail, styles.bold]}>» If on antidepressants, assess:</Text>      
      </View>
      <Text style={[styles.bold, styles.detail]}>Does the person take the medication as prescribed?</Text>
        <Text style={styles.detail}><Text style={styles.underline}>If not</Text>, explore reasons why and encourage adherence.</Text>
        <Text style={[styles.bold, styles.detail]}>Are there side effects?</Text>
        <View style={styles.detailContainer}>
            <Text style={styles.detail}><Text style={styles.underline}>If yes</Text>, evaluate and weigh benefits of treatment. </Text>
            <View style={styles.detailContainer}>
                <Text style={styles.detail}>{'\u2022'} If no to side effects to antidepressants, increase dose (TABLE 1).
                </Text>
                <Text style={styles.detail}>{'\u2022'} Follow-up in 1-2 weeks.
                </Text>
                <Text style={[styles.detail, styles.bold]}>{'\u2022'} CAUTION WITH DOSE INCREASE. CLOSE FOLLOW-UP NEEDED DUE TO POSSIBLE INCREASE IN SIDE EFFECTS.
                </Text>
            </View>
        </View>
        <Text style={[styles.bold, styles.detail]}>Are there symptoms of mania?</Text>
        <Text style={styles.subtitleUnderscore}>If YES</Text>
        <View style={styles.detailContainer}>
            <Text style={styles.detail}>» Discontinue antidepressant medication.</Text>
            <Text style={styles.detail}>» Treat mania and consult a specialist. Go to PSY.</Text>
        </View>
        <Text style={styles.subtitleUnderscore}>If NO</Text>
        <View style={styles.detailContainer}>
            <Text style={styles.detail}>» Go to 2 - monitor treatment</Text>
        </View>
        <View style={styles.titleUnderscore}>
            <Text style={styles.title}>2 - MONITOR TREATMENT</Text>
        </View>
        <Text style={styles.subtitleUnderscore}>At every contact:</Text>
        <View style={styles.detailContainer}>
            <Text style={styles.detail}>» Provide psychoeducation, reduce stress and strengthen social supports, promote functioning in daily activities and community life, and review, if applicable, antidepressant medication use and psychological treatment.
            </Text>
            <Text style={styles.detail}>» Does the person have any new symptoms of concern? Review for MNS and concurrent physical conditions.
            </Text>
            <Text style={styles.detail}>» Is the person a woman of childbearing age and considering pregnancy? If so, CONSULT A SPECIALIST.
            </Text>
            <Text style={styles.detail}>Assess for any IMMINENT RISK OF SUICIDE (Go to <Text style={styles.bold}>SUI</Text>).
            </Text>
        </View>
        <View style={styles.titleUnderscore}>
            <Text style={styles.title}>3 - REVISE TREATMENT AS APPROPRIATE</Text>
        </View>
        <Text style={styles.subtitleUnderscore}>If YES</Text>
        <View style={styles.detailContainer}>
            <Text style={styles.detail}>» Discuss with the person the risks and benefits of stopping the medication.</Text>
            <Text style={styles.detail}>» Taper the dose of medication gradually, over a minimum of 4 weeks. Monitor the person for symptom recurrence.</Text>
        </View>
        <Text style={styles.subtitleUnderscore}>If NO</Text>
        <View style={styles.detailContainer}>
            <Text style={styles.detail}>» Continue medication until person is symptom-free for 9-12 months.</Text>
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