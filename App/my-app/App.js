import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppConTextProvider } from './src/features/AppConText';
import AppNavigator from "./src/features/AppNavigator";
import ImagePickerExample from './ImagePickerExample';


const Stack = createNativeStackNavigator();

export default function App() {
  
  
  return (
    <AppConTextProvider>
    <NavigationContainer>
     <AppNavigator/>
    </NavigationContainer>
  </AppConTextProvider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
