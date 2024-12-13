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

// screens

// auth screens
import Signup from './screens/Signup';
import Signin from './screens/Signin';

// main screens
import Home from './screens/Home';
import Prime from './screens/Prime';
import Subscriptions from './screens/Subscriptions';
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
    <BottomTabs.Navigator>
      <BottomTabs.Screen name='Home' component={Home} />
      <BottomTabs.Screen name='Prime' component={Prime} />
      <BottomTabs.Screen name='Subscriptions' component={Subscriptions} />
      <BottomTabs.Screen name='Downloads' component={Downloads} />
      <BottomTabs.Screen name='Search' component={Search} />
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
            <Stack.Screen name='BottomTabBar' component={BottomTabBar} options={{ headerShown: false }} />
          )
            : (
              <Stack.Screen name="TopTabBar" component={TopTabBar} options={{ headerShown: false }} />
            )}

        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})

