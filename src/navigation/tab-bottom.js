import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '@shared/colors/index';
import { scale } from 'react-native-size-matters';
import AQIScreen from '@features/AQI/AQIScreen';

import HomeNavigator from '@navigation/home/home';
import Chart from '@components/chart/Chart';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const EmptyScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Đây là màn hình thử nghiệm!</Text>
    </View>
  );
};

// const HomeStack = () => {
//   return (
//     <Stack.Navigator initialRouteName={'AQIScreen'}>
//       <Stack.Screen
//         // options={{
//         //   headerShown: false
//         // }}
//         name={'AQIScreen'}
//         component={AQIScreen}
//       />
//       <Stack.Screen
//         options={{
//           headerShown: false
//         }}
//         name={'AQIDetailsScreen'}
//         component={AQIDetailsScreen}
//       />
//       <Stack.Screen
//         options={{
//           headerShown: false
//         }}
//         name={'DetailsInforScreen'}
//         component={DetailsInforScreen}
//       />
//       <Stack.Screen
//         options={{
//           headerShown: false
//         }}
//         name={'InforAQIScreen'}
//         component={InforAQIScreen}
//       />
//     </Stack.Navigator>
//   );
// };

const MapStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      options={{
        headerShown: false
      }} 
      name={'MapScreen'} 
      component={Chart} />
    </Stack.Navigator >
  );
};

// const StatisticalStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name={'StatisticalScreen'} component={EmptyScreen} />
//     </Stack.Navigator>
//   );
// };

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'AccountScreen'} component={EmptyScreen} />
    </Stack.Navigator>
  );
};
const TabBottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Map'}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          height: scale(50),
          borderColor: 'transparent',
          borderTopColor: '#fff',
          elevation: 0,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';
          let labelName = '';
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            labelName = 'Trang chủ';
          } else if (route.name === 'Map') {
            iconName = focused ? 'map' : 'map-outline';
            labelName = 'Bản đồ';
          } else if (route.name === 'Statistical') {
            iconName = focused ? 'bar-chart' : 'bar-chart-outline';
            labelName = 'Thống kê';
          } else {
            iconName = focused ? 'person' : 'person-outline';
            labelName = 'Tôi';
          }
          return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Ionicons
                name={iconName}
                color={focused ? Colors.PRIMARY_COLOR : '#0C381E'}
                size={24}
              />
              <Text
                style={{
                  fontSize: 11,
                  marginTop: 5,
                  color: focused ? Colors.PRIMARY_COLOR : '#0C381E',
                }}>
                {labelName}
              </Text>
            </View>
          );
        },
      })}>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Map" component={MapStack} />
      <Tab.Screen name="Account" component={AccountStack} />
    </Tab.Navigator>
  );
};

export default TabBottomNavigator;
