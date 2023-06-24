import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View, Dimensions, ScrollView} from 'react-native'
let height = Dimensions.get('window').height; //full height

export default function FollowUpDEP() {
  return (
    <ScrollView style={styles.container}>
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
        <Text style={styles.subtitle}>If YES:</Text>
      </View>
      <Text>» Encourage the person to continue with their current management plan until they are symptom free for 9-12 months.</Text>
      <Text>» Arrange a further follow up appointment in 1-2 weeks.</Text>
      <Text>» Decrease contact as the person’s symptoms improve, e.g. once every 3 months after the initial 3 months.</Text>
      <Text> Note: follow up should continue until the person no longer has any symptoms of depression.</Text>
      {/* <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text> */}
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
    container:{
        marginHorizontal:5
    },
    detail:{
        marginVertical: 6,
    }
})