import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View, Dimensions, ScrollView} from 'react-native'
let height = Dimensions.get('window').height; //full height

export function FollowUpSUB() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.titleUnderscore}>
            <Text style={styles.title}>Recommendations on frequency of contact for follow up appointments</Text>
        </View>
      <Text style={styles.detail}>» <Text style={styles.bold}>Harmful Use: </Text>Follow-up in one month. Follow-up as needed thereafter.</Text>
      <Text style={styles.detail}>» <Text style={styles.bold}>Dependence: </Text>Follow-up several times per week in the first two weeks, then weekly in the first month. Once improving, decrease frequency to monthly and as needed thereafter.</Text>
      <View style={styles.titleUnderscore}>
        <Text style={styles.title} >1 - ASSESS FOR IMPROVEMENT</Text>
      </View>
      <Text style={styles.bold}> At every visit assess:</Text>
      <Text style={styles.detail}>» Quantity and frequency of substance use, mental health, physical health,risk and protective factors (e.g. relationships, accommodation, employment, e.t.c) </Text>
      <Text style={styles.detail}>» Ask about factors that lead to substance use and consequences of substance use. </Text>
      <View>
        <Text style={[styles.bold]}> ONGOING SUBSTANCE USE</Text>
        <Text style={styles.detail}>» Develop strategies to reduce harm.</Text>
        <Text style={styles.detail}>» Treat health problems.</Text>
        <Text style={styles.detail}>» Develop strategies to reduce use.</Text>
        <Text style={styles.detail}>» Arrange detoxification or maintenance treatment if client agrees.</Text>
        <Text style={styles.detail}>» Conduct frequent review and outreach.</Text>
      </View>
      <View>
        <Text style={[styles.bold]}> RECENT CESSATION OF USE OR SHIFT TO NON-HARMFUL USE</Text>
        <Text style={styles.detail}>» Consider urine testing to confirm abstinence.</Text>
        <Text style={styles.detail}>» Give positive feedback to encourage the maintenance of abstinence/non-harmful use.</Text>
        <Text style={styles.detail}>» Treat other medical problems.</Text>
        <Text style={styles.detail}>» Consider relapse prevention medication for alcohol and opioid dependence.</Text>
        <Text style={styles.detail}>» Consider psychosocial therapies to prevent relapse and mutual help groups.</Text>
        <Text style={styles.detail}>» Support factors which reduce the risk of relapse such as housing and employment.</Text>
      </View>
      <View>
        <Text style={[styles.bold]}> LONG TERM CESSATION OR NON-HARMFUL USE</Text>
        <Text style={styles.detail}>» Consider occasional urine testing to confirm non-use.</Text>
        <Text style={styles.detail}>» Positive feedback.</Text>
        <Text style={styles.detail}>» Support factors which reduce the risk of relapse (such as housing and employment).</Text>
        <Text style={styles.detail}>» Encourage participation in mutual help groups.</Text>
        <Text style={styles.detail}>» Less frequent review.</Text>
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

