import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Header } from '@components/header/Header';
import DetailsInforScreen from '@features/AQI/DetailsInforScreen';
import InforAQIScreen from '@features/AQI/InforAQIScreen';
import AQIDetailsScreen from '@features/AQI/AQIDetailsScreen';
// import LoginScreen from '@features/auth/LoginScreen'
// import SignUpScreen from '@features/auth/SignUpScreen';
import MainStack from '@navigation/main/MainStack';

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			{/* <Header /> */}
			<Stack.Navigator
				screenOptions={{
					headerShown: false
				}}
				initialRouteName={'AQIDetailsScreen'}>
				{/* <Stack.Screen name="LoginScreen" component={LoginScreen}/>
				<Stack.Screen name="SignUpScreen" component={SignUpScreen}/> */}
				<Stack.Screen name='MainStack' component={MainStack} />
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
				<Stack.Screen
                options={{
                    headerShown: false
                }}
                name={'AQIDetailsScreen'}
                component={AQIDetailsScreen}
            />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
