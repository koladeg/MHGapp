import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MasterChartScreen from '../screens/MasterChartScreen';
import DisordersScreen from '../screens/DisordersScreen';
import LeftHeaderIcons from '../components/LeftHeaderIcons';
import RightHeaderIcons from '../components/RightHeaderIcons';
import AssessmentScreen from '../screens/AssessmentScreen';
import FollowUpScreen from '../screens/FollowUpScreen';

const MainStack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    < MainStack.Navigator 
    screenOptions={{
      headerStyle: {
          shadowRadius: 0,
          shadowOffset: {
              height: 0,
          }
      },
      headerTitleAlign: 'center',
      headerTitle: props => <Text>mhGap</Text>,
      headerLeft: () => {
        return <LeftHeaderIcons />
      },

      headerRight: () => {
        return <RightHeaderIcons />
      }
  }}
    >
        < MainStack.Screen 
        name="Home" component={HomeScreen} />
        < MainStack.Screen 
      //   options={{
      //     headerShown: false,
      // }}
        name="MasterChart" component={MasterChartScreen} />
        < MainStack.Screen 
        name="Disorders" component={DisordersScreen} />
        < MainStack.Screen 
        name="ASSESSMENT" component={AssessmentScreen} />
        < MainStack.Screen 
        name="followUp" component={FollowUpScreen} />
    </ MainStack.Navigator>
  )
}