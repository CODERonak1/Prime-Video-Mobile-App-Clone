// essential imports
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { onAuthStateChanged } from 'firebase/auth'; // Import Firebase Auth functions
import { auth } from './firebaseConfig';

// icons
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// screens

// auth screens
import Signup from './screens/Signup';
import Signin from './screens/Signin';

// main screens
import Home from './screens/Home';
import Movies from './screens/Movies';
import TVShows from './screens/TVShows';
import Downloads from './screens/Downloads';
import Search from './screens/Search';

// Navigators
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
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

// bottom tab navigation screens
const BottomTabBar = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: '#001027',
          borderTopWidth: 2,
          height: 60,
        },

        tabBarLabelStyle: {
          fontWeight: 'bold'
        }
      }}
    >
      <BottomTabs.Screen name='Home' component={Home} options={{
        tabBarIcon: ({ focused, size, color }) => <Ionicons name={focused ? 'home-sharp' : 'home-outline'}
          size={size} color={color} />

      }} />
      <BottomTabs.Screen name='Movies' component={Movies} options={{
        tabBarIcon: ({ focused, size, color }) => <MaterialCommunityIcons name={focused ? 'movie-open' : 'movie-open-outline'}
          size={size} color={color} />
      }} />
      <BottomTabs.Screen name='TV Shows' component={TVShows} options={{
        tabBarIcon: ({ focused, size, color }) => <Ionicons name={focused ? 'tv' : 'tv-outline'}
          size={size} color={color} />
      }} />
      <BottomTabs.Screen name='Downloads' component={Downloads} options={{
        tabBarIcon: ({ focused, size, color }) => <Ionicons name={focused ? 'download' : 'download-outline'}
          size={size} color={color} />
      }} />
      <BottomTabs.Screen name='Search' component={Search} options={{
        tabBarIcon: ({ focused, size, color }) => <Ionicons name={focused ? 'search-sharp' : 'search-outline'}
          size={size} color={color} />
      }} />
    </BottomTabs.Navigator>
  )
}

// main app screen
const App = () => {

  // setting the value for signed in or not
  const [isSignedin, setIsSignedin] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsSignedin(true)
        console.log("user is already signed in");
      }

      else {
        setIsSignedin(false)
        console.log("user is not signed in");
      }
      setIsLoading(false)
    })
    return () => unsubscribe();
  }, [])

  if (isLoading) {
    return (
      <View style={{ backgroundColor: '#04193d', height: '100%' }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size={50} color="#0678ff" />
        </View>

      </View>
    );
  }

  return (
    // navigation conatainer for all the navigation
    <NavigationContainer>
      {/* safe area view for all the screens applied */}
      <SafeAreaView style={{ flex: 1 }}>
        {/* status bar for all the screens applied */}
        <StatusBar style="light" backgroundColor='#04193d' />
        {/* stack navigations for all the screens and conditinal rendering based on auth state*/}
        <Stack.Navigator>
          {isSignedin ? (
            // Bottom Tab Bar for main screens
            <Stack.Screen name='MainScreen' component={BottomTabBar} options={{ headerShown: false }} />
          )
            : (
              // Top bar for auth 
              <Stack.Screen name="AuthScreen" component={TopTabBar} options={{ headerShown: false }} />
            )}

        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})