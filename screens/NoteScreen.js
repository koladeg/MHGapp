import { View, Text, useWindowDimensions, StyleSheet } from 'react-native'
import React from 'react'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';


const FirstRoute = () => (
    <View style={{ flex: 1  }} />
);

const SecondRoute = () => (
    <View style={{ flex: 1 }} />
);


const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});

export default function NoteScreen() {
  const layout = useWindowDimensions();

  const renderTabBar = (props) => (
      <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: 'white' }}
          style={{ backgroundColor: 'white' }}
          activeColor={'blue'}
          inactiveColor={'grey'}
          renderLabel={({ route, focused, color }) => (
              <Text 
                style={{ color , textAlign: 'center', fontSize: 17, width: 120, paddingVertical: 10, textDecorationLine: focused  ? 'underline' : 'none'}}
                >
                {route.title}
              </Text>
          )}
      />
  );


  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Assessment Summary' },
    { key: 'second', title: 'Management Summary' },
  ]);


  return (
    <>
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