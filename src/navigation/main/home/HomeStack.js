import React from 'react';
import { StyleSheet } from 'react-native';

// Fragments
import { LocationFragment } from '@features/home/Location';
import { DeviceFragment } from '@features/home/Device';
import AQIDetailsScreen from '@features/AQI/AQIDetailsScreen';
import DetailsInforScreen from '@features/AQI/DetailsInforScreen';
import InforAQIScreen from '@features/AQI/InforAQIScreen';
import Header from '@components/header/Header';

// Navigation modules
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
    tabBarLabel: {
        fontSize: 16,
        textTransform: 'none'
    }
});

const HomeStack = () => {
    return (
        
        <Stack.Navigator
        screenOptions={{
            tabBarLabelStyle: styles.tabBarLabel,
        }}>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name={'LocationFragment'}
                component={LocationFragment}
            /> 
        </Stack.Navigator>
    )
};

export default HomeStack;