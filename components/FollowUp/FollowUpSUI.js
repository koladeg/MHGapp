import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View, Dimensions, ScrollView} from 'react-native'
let height = Dimensions.get('window').height; //full height

export function FollowUpSUI() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.titleUnderscore}>
            <Text style={styles.title}>Recommendations on frequency of contact for follow up appointments</Text>
        </View>
      <Text style={styles.detail}>» MAINTAIN REGULAR CONTACT (via telephone, home visits or contact cards) more frequently initially (e.g daily, weekly) for the first 2 months.</Text>
      <Text style={styles.detail}>» Follow-up for as long as the risk of self-harm/suicide persists.</Text>
      <View style={styles.titleUnderscore}>
        <Text style={styles.title} >1 - ASSESS FOR IMPROVEMENT</Text>
      </View>
      <Text style={styles.subtitle}>Is the person improving?</Text>
      <View>
        <Text style={styles.subtitleUnderscore}>If YES</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={[styles.detail, styles.bold]}>» Decrease contact as the person improves.</Text>
        <Text style={[styles.detail, styles.bold]}>» Continue following up for 2 years, further decreasing contact according to improvement(e.g. once every 2-4 weeks after initial 2 months, and twice in the second year).</Text>
      </View>
      
      <Text style={styles.subtitleUnderscore}>If NO</Text>
      <Text style={styles.bold}>Increase intensity or duration of contact as necessary.</Text>
      <Text style={styles.bold}>Refer to specialist as needed.</Text>
        
        <View style={styles.titleUnderscore}>
            <Text style={styles.title}>2 - MONITOR TREATMENT</Text>
        </View>
        <View style={styles.detailContainer}>
            <Text style={styles.detail}>» At every contact,<Text style= {styles.bold}> routinely assess for suicidal thoughts and plans.</Text> 
            </Text>
            <Text style={styles.detail}>» Is the risk of self-harm/suicide imminent?<Text style={styles.bold}> See SUI 1</Text> (Assessment).
            </Text>
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
