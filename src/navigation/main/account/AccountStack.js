import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';

const Stack = createStackNavigator();

const EmptyScreen = () => {
	return (
		<View style={{ flex: 1 }}>
			<Text>Đây là màn hình thử nghiệm!</Text>
		</View>
	);
};

const AccountStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name={'AccountScreen'} component={EmptyScreen} />
		</Stack.Navigator>
	);
};

export default AccountStack;