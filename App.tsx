// essential imports
// import { StyleSheet, View, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';

// icons
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// components
import Loading from './components/Loading';

// screens

// auth screens
import Signup from './screens/Signup';
import Signin from './screens/Signin';

// main screens
import Home from './screens/Home';
import Movies from './screens/Movies';
import TVShows from './screens/TV Shows';
import Downloads from './screens/Downloads';
import Search from './screens/Search';

// other screens
import Profile from './screens/Profile';
import VideoPage from './screens/VideoPage';
import NewReleases from './screens/NewReleases';
import ComingSoon from './screens/ComingSoon';

// Navigators
const Stack = createNativeStackNavigator(); // for all the screens
const BottomTabs = createBottomTabNavigator(); // for the main screens
const MaterialTopTab = createMaterialTopTabNavigator(); // for the auth screems
const NewTopTab = createMaterialTopTabNavigator(); // for new and hot screen

// New Top tab bar for the new and hot screen for showing the new releases and upcoming
const NewTopTabBar = () => {
  return (
    <NewTopTab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#04193d'
        },

        tabBarLabelStyle: {
          fontSize: 18,
          fontWeight: 'bold',
          fontStyle: 'italic'
        },

        tabBarInactiveTintColor: 'grey',
        tabBarActiveTintColor: 'white'
      }}>
      {/* new releases screen */}
      <NewTopTab.Screen name='New Releases 🔥' component={NewReleases} />
      {/* coming soon screen*/}
      <NewTopTab.Screen name='Coming Soon ✨' component={ComingSoon} />
    </NewTopTab.Navigator>
  )
}

// Material top tab navigation screen
const TopTabBar = () => {
  return (
    // navigator style
    <MaterialTopTab.Navigator
      screenOptions={{
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
      <MaterialTopTab.Screen
        name='Signin'
        component={Signin}
        options={{ title: 'SIGN IN' }} />
      {/* sign up screen */}

      <MaterialTopTab.Screen
        name='Signup'
        component={Signup}
        options={{ title: 'SIGN UP' }} />
    </MaterialTopTab.Navigator>
  )
}

// bottom tab navigation screens
const BottomTabBar = () => {
  return (
    // Bottom tab bar global styles
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
      }}
    >
      {/* home */}
      <BottomTabs.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ focused, size, color }) => <Ionicons name={focused ? 'home-sharp' : 'home-outline'}
            size={size} color={color} />
        }} />

      {/* movies */}
      <BottomTabs.Screen
        name='Movies'
        component={Movies}
        options={{
          tabBarIcon: ({ focused, size, color }) => <MaterialCommunityIcons name={focused ? 'movie-open' : 'movie-open-outline'}
            size={size} color={color} />
        }} />
      {/* tv shows */}
      <BottomTabs.Screen
        name='TV Shows'
        component={TVShows}
        options={{
          tabBarIcon: ({ focused, size, color }) => <Ionicons name={focused ? 'tv' : 'tv-outline'}
            size={size} color={color} />
        }} />

      {/* new and hot screen for showing whats new the prime video and coming soon*/}
      <BottomTabs.Screen
        name='New & Hot'
        component={NewTopTabBar}
        options={{
          tabBarIcon: ({ focused, size, color }) => <MaterialCommunityIcons name={focused ? 'play-box-multiple' : 'play-box-multiple-outline'}
            size={size} color={color} />
        }} />

      {/* downloads */}
      <BottomTabs.Screen
        name='Downloads'
        component={Downloads}
        options={{
          tabBarIcon: ({ focused, size, color }) => <Ionicons name={focused ? 'download' : 'download-outline'}
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
    // sets loading true
    setIsLoading(true)

    // checks the auth state weather the user is already signed in or not
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // if user is signed
      if (user) {
        setIsSignedin(true)
        console.log("user is already signed in");
      }

      // if user not signed
      else {
        setIsSignedin(false)
        console.log("user is not signed in");
      }
      // sets loading false
      setIsLoading(false)
    })
    return () => unsubscribe();
  }, [])

  // for loading the component
  if (isLoading) {
    return <Loading />
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
            <Stack.Screen
              name='MainScreen'
              component={BottomTabBar}
              options={{ headerShown: false }} />
          )
            : (
              // Top bar for auth 
              <Stack.Screen
                name="AuthScreen"
                component={TopTabBar}
                options={{ headerShown: false }} />
            )}

          <Stack.Screen
            name='Search'
            component={Search}
            options={{ headerShown: false }} />

          <Stack.Screen
            name='Profile'
            component={Profile}
            options={{ headerShown: false }} />

          <Stack.Screen
            name='VideoPage'
            component={VideoPage}
            options={{ headerShown: false }} />

        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App

// const styles = StyleSheet.create({})