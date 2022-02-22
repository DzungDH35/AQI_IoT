import React from 'react';
import {LogBox} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Header} from '@components/header/Header';
import DetailsInforScreen from '@features/AQI/DetailsInforScreen';
import InforAQIScreen from '@features/AQI/InforAQIScreen';
import AQIDetailsScreen from '@features/AQI/AQIDetailsScreen';
import MainStack from '@navigation/main/MainStack';
import { useNavigation } from '@react-navigation/native';
import ContextWrapper from "@context/ContextWrapper";


const Stack = createStackNavigator();
LogBox.ignoreAllLogs();

function App ()  {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'MainStack'}>
        <Stack.Screen name="MainStack" component={MainStack} />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={'DetailsInforScreen'}
          component={DetailsInforScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={'InforAQIScreen'}
          component={InforAQIScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={'AQIDetailsScreen'}
          component={AQIDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function Main() {
  return (
    <ContextWrapper>
      <App />
    </ContextWrapper>
  );
}

export default Main;
