import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HomeButton } from '../components/HomeButton'
import { colors } from '../constants/Colors'
import ModeIdentifier from '../components/ModeIdentifier'

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <ModeIdentifier />

      <View style={styles.row}>
        <HomeButton 
          title="PATIENTS"
          icon="person"
          color="grey"
          type="fontisto"
          screen="patients"
        />
        <HomeButton 
          title="MASTER CHART"
          icon="clipboard-notes"
          color="grey"
          type="foundation"
          screen="MasterChart"
        />
      </View>
      
      <View style={styles.row}>
        <HomeButton 
          title="ASSESSMENT"
          icon="account-tree" 
          color="grey"
          type="material"
          screen="Disorders"
        />
        <HomeButton 
          title="MANAGEMENT"
          icon="stethoscope"
          color="grey"
          type="font-awesome-5"
          screen="Disorders"
        />
      </View>

    </View>
  
  )
}  


const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  row:{
    flexDirection:'row',
    // alignItems:'center',
    justifyContent:'space-evenly',
  },
  text:{
     fontSize:17,
     lineHeight:39,
     fontWeight:'bold',
     color:'blue'
  },
  screen:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
 })