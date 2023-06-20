import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { DropdownButton } from '../components/DropdownButton';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../constants/Colors';
let width = Dimensions.get('window').width;

export default function MasterChartScreen() {

  return (
    <ScrollView style={styles.container}>
    <View style={styles.button1View}>
      <LinearGradient
          // Button Linear Gradient
          start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}
          colors={[colors.secondary, colors.primary]}
          style={styles.button1}>
          <Text style={styles.buttonText}>Show all</Text>
      </LinearGradient>
    </View>
      <DropdownButton color={colors.dep} title={'DEPRESSION'}>
        <View style={styles.details}>
          <View style={styles.detailcontain}>
            <Text style={styles.text}>
            {`\u25AA Multiple persistent physical symptoms with no clear cause. \n \u25AA Low energy, fatigue, sleep problems. \n \u25AA Persistent sadness or depressed mood, anxiety`}
            </Text>
          </View>
        </View>
      </DropdownButton>
      <DropdownButton color={colors.psy} title={'PSYCHOSES'}>
        <View style={styles.details}>
          <View style={styles.detailcontain}>
            <Text style={styles.text}>{`\u25AA Marked behavioural changes; neglecting usual responsibilities related to work, school, domestic or social activities`}
            </Text>
            <Text style={styles.text}>{`\u25AA Agitated, aggressive behavior, decreased or increased activity \n`}  </Text>
            <Text style={styles.text}>{`\u25AA Fixed false beliefs not shared by others in the person’s culture \n`}  </Text>
            <Text style={styles.text}>{`\u25AA Hearing voices or seeing things that are not there \n`}  </Text>
            <Text style={styles.text}>{`\u25AA Lack of realization that one is having mental health problem \n`}  </Text>
          </View>
        </View>    
      </DropdownButton>
      <DropdownButton color={colors.epi} title={'EPILEPSY'}>
        <View style={styles.details}>
          <View style={styles.detailcontain}>
            <Text style={styles.text}>{`\u25AA Convulsive movement or fits/seizure. \n \u25AA During the convulsion: loss of consciousness or impaired consciousness, stiffness, rigidity, tongue bite, injury, incontinence of urine or faeces  \n \u25AA After the convulsion: fatigue, drowsiness, sleepiness, confusion, abnormal behaviour, headache, muscle aches, or weakness on one side of the body \n`}  </Text>
          </View>
        </View>
      </DropdownButton>
      <DropdownButton color={colors.sub} title={'DISORDERS DUE TO SUBSTANCE USE'}>
        <View style={styles.details}>
        <Text style={styles.text}>{`All persons presenting to health care facilities should be asked about their tobacco and alcohol use.\n`}</Text>
          <View style={styles.detailcontain}>
            <Text style={styles.text}>{`\u25AA Appearing affected by alcohol or other substance (e.g. smell of alcohol, slurred speech, sedated, erratic behaviour) \n`}</Text>
            <Text style={styles.text}>{`\u25AA Signs and symptoms of acute behavioural effects, withdrawal features or effects of prolonged use  \n`}  </Text>
            <Text style={styles.text}>{`\u25AA Deterioration of social functioning (i.e. difficulties at work or home, unkempt appearance) \n`}  </Text>
            <Text style={styles.text}>{`\u25AA Signs of chronic liver disease (abnormal liver enzymes), jaundiced (yellow) skin and eyes, palpable and tender liver edge (in early liver disease), ascites (distended abdomen is filled with fluid), spider naevi (spider-like blood vessels visible on the surface of the skin), and altered mental status (hepatic encephalopathy) \n`}  </Text>
            <Text style={styles.text}>{`\u25AA Problems with balance, walking, coordinated  movements, and nystagmus \n`}  </Text>
            <Text style={styles.text}>{`\u25AA Incidental findings: macrocytic anaemia, low platelet count, elevated mean corpuscular volume (MCV \n`}  </Text>
            <Text style={styles.text}>{`\u25AA Emergency presentation due to substance withdrawal, overdose, or intoxication. Person may appear sedated, overstimulated, agitated, anxious or confused \n \u2043 Recurrent requests for psychoactive medications including analgesics \n \u2043 Injuries \n \u2043 Infections associated with intravenous drug use (HIV/AIDS, Hepatitis C)`}  </Text>
          </View>
        </View>
      </DropdownButton>
      <DropdownButton color={colors.sui} title={'SELF-HARM/SUICIDE'}>
        <View style={styles.details}>
          <View style={styles.detailcontain}>
          <Text style={styles.text}>{`\u25AA Extreme hopelessness and despair\n`}</Text>
            <Text style={styles.text}>{`\u25AA Current thoughts, plan or act of self-harm/suicide, or history thereof\n`}  </Text>
            <Text style={styles.text}>{`\u25AA  Any of the other priority conditions, chronic pain, or extreme emotional distress \n`}  </Text>
          </View>
        </View>
      </DropdownButton>
      <DropdownButton color={colors.other} title={'OTHER SIGNIFICANT MENTAL HEALTH COMPLAINTS'}>
      </DropdownButton>
      <LinearGradient
        // Button Linear Gradient
        start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}
        colors={[colors.secondary, colors.primary]}
        style={[styles.button, {marginTop: 50}]}>
        <Text style={styles.buttonText}>Proceed</Text>
      </LinearGradient>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
    marginBottom: 32,
  },
  details:{
    alignItems:'center',
    // justifyContent:'center',
    backgroundColor:'white'
  },
  detailcontain:{
    // padding:15,
    width: '90%'
  },
  button:{
    flex:2,
    paddingHorizontal:15,
    alignItems:"center",
    // width:width - 40,
    borderRadius:5,
  },
  button1View:{
    alignItems:'flex-end',
    marginVertical: 22,
  },
  button1:{
    width:width/2.4,
    borderRadius:5,
  },
  buttonText:{
    fontSize: 17,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
},
  text:{
      fontSize: 17,
      // color: 'white'
  },
  bottomButton:{
    marginBottom:10
  }
 })