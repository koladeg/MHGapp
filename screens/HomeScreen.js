import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HomeButton } from '../components/HomeButton'

export default function HomeScreen() {
  return (
    <SafeAreaView>
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
        />
      </View>
      
      <View style={styles.row}>
        <HomeButton 
          title="ASSESSMENT"
          icon="git-branch" 
          color="grey"
        />
        <HomeButton 
          title="MANAGEMENT"
          icon="man"
          color="grey"
        />
      </View>

    </View>
  
    </SafeAreaView>
  )
}  


const styles = StyleSheet.create({
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
    marginHorizontal:5
  }
 })