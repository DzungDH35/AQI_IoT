import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '@shared/colors/index';
import { scale } from 'react-native-size-matters';
import HomeStack from '@navigation/main/home/HomeStack';
import MapStack from '@navigation/main/map/MapStack';
import SettingStack from '@navigation/main/setting/SettingStack';

const BottomTab = createBottomTabNavigator();

const MainStack = ({ navigation }) => {
	return (
		<BottomTab.Navigator
			initialRouteName={'Home'}
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
						iconName = focused ? 'settings' : 'settings-outline';
						labelName = 'Cài đặt';
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
			<BottomTab.Screen name="Home" component={HomeStack} />
			<BottomTab.Screen name="Map" component={MapStack} />
			<BottomTab.Screen name="Setting" component={SettingStack} />
		</BottomTab.Navigator>
	);
};

export default MainStack;