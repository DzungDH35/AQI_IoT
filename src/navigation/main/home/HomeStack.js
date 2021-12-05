import React from 'react';

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
const TopTab = createMaterialTopTabNavigator();

const LocationStack = () => {
    return (
        <Stack.Navigator 
            initialRouteName={'LocationFragment'}>
                
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

const HomeStack = () => {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="Locations" component={LocationStack} />
            <TopTab.Screen name="Devices" component={DeviceFragment} />
        </TopTab.Navigator>
    )
};

export default HomeStack;