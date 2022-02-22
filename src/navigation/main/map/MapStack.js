import React, {useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import GlobalContext from "@context/Context";
import Header from '@components/header/Header';
import MapScreen from './MapScreen';
const Stack = createStackNavigator();

const EmptyScreen = () => {
    const {api} = useContext(GlobalContext);
	return (
		<View style={{ flex: 1 }}>
			<Header />
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text style={{ color: 'black'}}>Đây là màn hình thử nghiệm!</Text>
				<Text style={{ color: 'black'}}>{api? api : 'null'}</Text>
			</View>
		</View>
	);
};

const MapStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen 
				name={'MapScreen'} 
				component={EmptyScreen} 
				options={{
                    headerShown: false
                }}
			/>
		</Stack.Navigator>
	);
};

export default MapStack;