import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

// Screens
import Signup from './screens/Signup';
import Signin from './screens/Signin';

const Stack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();

const TopTabBar = () => {
  return (
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
          backgroundColor: '#00050e',
        },

        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#bb86fc',
      }}
    >
      <TopTab.Screen name="Signin" component={Signin} options={{ title: 'Sign in' }}/>
      <TopTab.Screen name="Signup" component={Signup} options={{ title: 'Sign up' }}/>
    </TopTab.Navigator>
  );
};

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>

        <Stack.Navigator>
          <Stack.Screen name="TopTabBar" component={TopTabBar} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;