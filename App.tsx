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

// main screens
import Home from './screens/Home';


// Navigators
const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const MaterialTopTab = createMaterialTopTabNavigator();

// Material top tab navigation screen
const TopTabBar = () => {
  return (
    // navigator style
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
      {/* sign in screen */}
      <MaterialTopTab.Screen name='Signin' component={Signin} options={{ title: 'SIGN IN' }} />
      {/* sign up screen */}
      <MaterialTopTab.Screen name='Signup' component={Signup} options={{ title: 'SIGN UP' }} />
    </MaterialTopTab.Navigator>
  )
}

// main app screen
const App = () => {
  return (
    // navigation conatainer for all the navigation
    <NavigationContainer>
      {/* safe area view for all the screens applied */}
      <SafeAreaView style={{ flex: 1 }}>
        {/* status bar for all the screens applied */}
        <StatusBar style="light" backgroundColor='#04193d' />
        {/* stack navigations for all the screens */}
        <Stack.Navigator>
          {/* Material Top Tab Bar screen */}
          <Stack.Screen name='TopTabBar' component={TopTabBar} options={{ headerShown: false }} />
          <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})