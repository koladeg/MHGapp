import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

const MainStack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    < MainStack.Navigator>
        < MainStack.Screen 
        options={{
            headerShown: false,
        }}
        name="Home" component={HomeScreen} />
    </ MainStack.Navigator>
  )
}