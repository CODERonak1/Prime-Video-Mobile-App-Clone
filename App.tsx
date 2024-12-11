// essential imports
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

// screens

// auth screens
import Signup from './screens/Signup';
import Signin from './screens/Signin';

// Navigators
const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const MaterialTopTab = createMaterialTopTabNavigator();

const TopTabBar = () => {
  return (
    <MaterialTopTab.Navigator screenOptions={{
      tabBarStyle: {
        backgroundColor: '#04193d'
      },

      tabBarLabelStyle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
      }
    }}>
      <MaterialTopTab.Screen name='Signin' component={Signin} options={{ title: 'SIGN IN' }} />
      <MaterialTopTab.Screen name='Signup' component={Signup} options={{ title: 'SIGN UP' }} />
    </MaterialTopTab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="light" backgroundColor='#04193d' />
        <Stack.Navigator>
          <Stack.Screen name='TopTabBar' component={TopTabBar} options={{ headerShown: false }} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})