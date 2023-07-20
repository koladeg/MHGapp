import { View, Text, useWindowDimensions, StyleSheet } from 'react-native'
import React from 'react'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import ScreenIdentifier from '../components/ScreenIdentifier';
import ClearNoteButton from '../components/ClearNoteButton';
import RefreshPatients from '../components/RefreshPatients';


const FirstRoute = () => (
    <View style={{ flex: 1  }} />
);

const SecondRoute = () => (
    <View style={{ flex: 1 }} />
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
});