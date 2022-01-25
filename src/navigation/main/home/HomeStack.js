import React from 'react';
import { StyleSheet } from 'react-native';

// Fragments
import { LocationFragment } from '@features/home/Location';
import { DeviceFragment } from '@features/home/Device';
import AQIDetailsScreen from '@features/AQI/AQIDetailsScreen';
import DetailsInforScreen from '@features/AQI/DetailsInforScreen';
import InforAQIScreen from '@features/AQI/InforAQIScreen';

// Navigation modules
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();

const LocationStack = () => {
    return (
        <Stack.Navigator>
                
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name={'LocationFragment'}
                component={LocationFragment}
            />   
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBarLabel: {
        fontSize: 16,
        textTransform: 'none'
    }
});

const HomeStack = () => {
    return (
        <TopTab.Navigator
            screenOptions={{
                tabBarLabelStyle: styles.tabBarLabel,
            }}>
            <TopTab.Screen name="Locations" component={LocationStack}/>
            <TopTab.Screen name="Devices" component={DeviceFragment}/>
        </TopTab.Navigator>
    )
};

export default HomeStack;