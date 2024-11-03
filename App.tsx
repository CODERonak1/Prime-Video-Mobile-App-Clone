// essential imports
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native'; // Import ActivityIndicator for loading screen
import { onAuthStateChanged } from "firebase/auth"; // Import for handling auth state change

// Screens
import Signup from './screens/Signup';
import Signin from './screens/Signin';
import Home from './screens/Home';

// Firebase configuration
import { auth } from './firebaseConfig'; // Ensure you have the correct path

// Navigators
const Stack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();

// Top tab for sign in and sign up
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
  const [isSignedIn, setIsSignedIn] = useState(false); // State to track sign-in status
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Update the sign-in state based on user status
      setIsSignedIn(!!user); // Set to true if user exists, false otherwise
      setLoading(false); // Set loading to false after user status is determined
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Loading screen to display while checking auth state
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#020d17' }}>
        <ActivityIndicator size="large" color="#157bcf" />
      </View>
    );
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar style="light" backgroundColor="#020d17" />
        <Stack.Navigator>
          {isSignedIn ? (
            <>
              <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            </>
          ) : (
            <>
              <Stack.Screen name="TopTabBar" component={TopTabBar} options={{ headerShown: false }} />
              {/* Optionally you can add more screens for Forgot Password or others here */}
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;