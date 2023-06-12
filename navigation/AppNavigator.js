import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MasterChartScreen from '../screens/MasterChartScreen';
import DisordersScreen from '../screens/DisordersScreen';

const MainStack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    < MainStack.Navigator>
        < MainStack.Screen 
        options={{
            headerShown: false,
        }}
        name="Home" component={HomeScreen} />
        < MainStack.Screen 
        name="MasterChart" component={MasterChartScreen} />
        < MainStack.Screen 
        name="Disorders" component={DisordersScreen} />
    </ MainStack.Navigator>
  )
}