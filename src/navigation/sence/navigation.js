import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import LoginScreen from '@features/auth/LoginScreen'
// import SignUpScreen from '@features/auth/SignUpScreen';
import {Colors} from '@shared/colors/index';
import TabBottomNavigator from './tab-bottom';
const Stack = createStackNavigator();
const NavigationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'TabBottomNavigator'}>
      {/* <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
            />
            <Stack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
            /> */}
      <Stack.Screen name="TabBottomNavigator" component={TabBottomNavigator} />
    </Stack.Navigator>
  );
};

export default NavigationStack;
