import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HomeButton } from '../components/HomeButton'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.screen}>

      <View style={styles.row}>
        <HomeButton 
          title="PATIENTS"
          icon="person"
          color="grey"
        />
        <HomeButton 
          title="MASTER CHART"
          icon="file-tray-full-outline"
          color="grey"
          screen="MasterChart"
        />
      </View>
      
      <View style={styles.row}>
        <HomeButton 
          title="ASSESSMENT"
          icon="git-branch" 
          color="grey"
          screen="Disorders"
        />
        <HomeButton 
          title="MANAGEMENT"
          icon="man"
          color="grey"
          screen="Disorders"
        />
      </View>

    </View>
  
    </SafeAreaView>
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