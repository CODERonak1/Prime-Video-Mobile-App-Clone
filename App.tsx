// essential imports
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

// Screens
import Signup from './screens/Signup';
import Signin from './screens/Signin';
import Home from './screens/Home';

// Navigators
const Stack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();

// Top tab for sign and sign up
const TopTabBar = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 16,
          textTransform: 'uppercase',
          color: '#ffffff',
        },

        tabBarIndicatorStyle: {
          backgroundColor: '#157bcf',
          height: 1,
        },

        tabBarStyle: {
          backgroundColor: '#020d17',
        },

        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#bb86fc',
      }}
      >
      <TopTab.Screen name="Signin" component={Signin} options={{ title: 'Sign in' }} />
      <TopTab.Screen name="Signup" component={Signup} options={{ title: 'Sign up' }} />
    </TopTab.Navigator>
      </SafeAreaView>
  );
};

const App = () => {
  return (

    <PaperProvider>
      <NavigationContainer>
        <StatusBar style="light" backgroundColor="#020d17" />
        <Stack.Navigator>
          <Stack.Screen name="TopTabBar" component={TopTabBar} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;