import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { Header} from '@components/header/Header';

// Fragments
import { LocationFragment } from '@features/home/Location';
import { DeviceFragment } from '@features/home/Device';

// Navigation modules
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff'
	}
});

class Home extends React.Component {
	render() {
		return (
			<NavigationContainer style={styles.container}>
				<Header/>
				<Tab.Navigator>
					<Tab.Screen name="Locations" component={LocationFragment} />
					<Tab.Screen name="Devices" component={DeviceFragment} />
				</Tab.Navigator>
				{/* <View style={{backgroundColor: "#fff", padding: 10}}>
					<Text>Footer</Text>
					<Text>Footer</Text>
					<Text>Footer</Text>
				</View> */}
			</NavigationContainer>
		);
	}
}

export { Home as HomeScreen };