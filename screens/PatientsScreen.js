import { View, Text, useWindowDimensions, StyleSheet } from 'react-native'
import React from 'react'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import ScreenIdentifier from '../components/ScreenIdentifier';
import ClearNoteButton from '../components/ClearNoteButton';
import RefreshPatients from '../components/RefreshPatients';
import Search from '../components/Search';
import PatientCard from '../components/PatientCard';
import PatientList from '../components/PatientList';
import GradientButton from '../components/GradientButton';

const DATA = [
  {
    id: 'NI-3ad53abb28ba',
    lastAssessment: '08/09/2023',
    weeksLastAssessment:'0',
    followUps:1,
    nextFollowUp:'29/09/2023',
    SP:true,
    
  },
  {
    id: 'NI-fbd91aa97f63',
    lastAssessment:'',
    weeksLastAssessment:'',
    followUps:0,
    nextFollowUp:'',
    title: 'Second Item',
    SP:false,
  },
  {
    id: 'NI-145571e29d72',
    lastAssessment:'',
    weeksLastAssessment:'',
    followUps:0,
    nextFollowUp:'',
    title: 'Third Item',
    SP:false,
  },
  {
    id: 'NI-145271e29d72',
    lastAssessment:'',
    weeksLastAssessment:'',
    followUps:0,
    nextFollowUp:'',
    title: 'Third Item',
    SP:false,
  },
  {
    id: 'NI-145571e22d72',
    lastAssessment:'',
    weeksLastAssessment:'',
    followUps:0,
    nextFollowUp:'',
    title: 'Third Item',
    SP:false,
  },
  {
    id: 'NI-145571e29d72',
    lastAssessment:'',
    weeksLastAssessment:'',
    followUps:0,
    nextFollowUp:'',
    title: 'Third Item',
    SP:false,
  },
];

const FirstRoute = () => (
    <View style={{ flex: 1  }}>
      <Search />
    </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1  }}>
    <Search />
    <PatientList data={DATA}/>
    <GradientButton  text={'New patient'}style={styles.button} />
  </View>
);

const ThirdRoute = () => (
    <View style={{ flex: 1 }} />
);


const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute
});

export default function PatientsScreen() {
  const layout = useWindowDimensions();

  const renderTabBar = (props) => (
      <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: 'blue' }}
          style={{ backgroundColor: 'white' }}
          activeColor={'blue'}
          inactiveColor={'grey'}
          renderLabel={({ route, focused, color }) => (
              <Text 
                style={{ color , textAlign: 'center', fontSize: 17, width: 120, paddingVertical: 10, marginTop:60, textDecorationLine: focused  ? 'underline' : 'none'}}
                >
                {route.title}
              </Text>
          )}
      />
  );


  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'All' },
    { key: 'second', title: 'Active' },
    { key: 'third', title: 'Inactive' },
  ]);


  return (
    <>
      <RefreshPatients />
       <TabView
          lazy
          swipeEnabled={false}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
      />
    </>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  button:{
    position: 'absolute',
    left:20,
    borderRadius: 10,
    right: 20,
    bottom: 30,
    height: 60,
    alignItems:'center',
    justifyContent:'center',
    zIndex: 2
  }
});