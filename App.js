import React from 'react';
import { StatusBar, StyleSheet, View, Text } from 'react-native';
import NavigationStack from './src/navigation/sence/navigation';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </View>
  );
};
const styles = StyleSheet.create({});

export default App;
