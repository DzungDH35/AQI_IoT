import React from 'react';
import { StatusBar, StyleSheet, View, Text } from 'react-native';
import NavigationStack from '@src/navigation/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { Header } from '@components/header/Header';
import 'react-native-gesture-handler';
const App = () => {
  return (
    <NavigationContainer>
      <Header/>
      <NavigationStack />
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({});

export default App;
