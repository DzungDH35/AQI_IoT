import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { Header } from '@components/header/Header';

// Fragments
import { LocationFragment } from '@features/home/Location';
import { DeviceFragment } from '@features/home/Device';
import AQIDetailsScreen from '@features/AQI/AQIDetailsScreen'
import DetailsInforScreen from '@features/AQI/DetailsInforScreen';
import InforAQIScreen from '@features/AQI/InforAQIScreen';
// Navigation modules
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const TabTop = createMaterialTopTabNavigator();

const LocationStack = () => {
    return (
        <Stack.Navigator initialRouteName={'AQIDetailsScreen'}>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name={'LocationFragment'}
                component={LocationFragment}
            />
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name={'AQIDetailsScreen'}
                component={AQIDetailsScreen}
            />
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name={'DetailsInforScreen'}
                component={DetailsInforScreen}
            />
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name={'InforAQIScreen'}
                component={InforAQIScreen}
            />
        </Stack.Navigator>
    );
};

const HomeNavigator = () => {
    return (
        <TabTop.Navigator>
            <TabTop.Screen name="Locations" component={LocationStack} />
            <TabTop.Screen name="Devices" component={DeviceFragment} />
        </TabTop.Navigator>
    )
}

export default HomeNavigator;