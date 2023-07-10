import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MasterChartScreen from '../screens/MasterChartScreen';
import DisordersScreen from '../screens/DisordersScreen';
import LeftHeaderIcons from '../components/LeftHeaderIcons';
import RightHeaderIcons from '../components/RightHeaderIcons';
import AssessmentScreen from '../screens/AssessmentScreen';
import FollowUpScreen from '../screens/FollowUpScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const MainStack = createNativeStackNavigator();

export function AppNavigator() {
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
        < MainStack.Screen 
        name="Login" component={LoginScreen} />
        < MainStack.Screen 
        name="register" component={RegisterScreen} />
    </ MainStack.Navigator>
  )
}

// const AuthStack = createStackNavigator();

// const AuthStackScreen = () => ( 
//   <AuthStack.Navigator
//         headerMode="none"
//   >
//     <AuthStack.Screen
//       name="Login"
//       component={LoginScreen}
//     />
//   </AuthStack.Navigator>

// );

// const RootStack = createStackNavigator();

// export const RootStackScreen = () => ( 
//   <RootStack.Navigator
//         headerMode="none"
//   >
//     <RootStack.Screen
//       name="Auth"
//       component={AuthStackScreen}
//     />
//     <RootStack.Screen
//       name="Main"
//       component={AppNavigator}
//     />
//   </RootStack.Navigator>
// );