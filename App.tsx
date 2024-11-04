// essential imports
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebaseConfig';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// icons
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

// Screens
import Signup from './screens/Signup';
import Signin from './screens/Signin';
import Home from './screens/Home';
import Prime from './screens/Prime';
import Search from './screens/Search';
import Subscriptions from './screens/Subscriptions';
import Downloads from './screens/Downloads';

// Navigators
const Stack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

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
          tabBarInactiveTintColor: 'grey',
        }}
      >
        <TopTab.Screen name="Signin" component={Signin} options={{ title: 'Sign in' }} />
        <TopTab.Screen name="Signup" component={Signup} options={{ title: 'Sign up' }} />
      </TopTab.Navigator>
    </SafeAreaView>
  );
};

const BottomTabBar = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BottomTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: 'grey',
          tabBarStyle: {
            backgroundColor: '#020d17',
            borderTopWidth: 0,
            borderTopColor: 'grey',
          },
          tabBarLabelStyle: {
            fontSize: 9,

          },
          headerShown: false,
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home-filled" size={size} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Prime"
          component={Prime}
          options={{
            title: 'Prime',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="checkcircleo" size={24} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Subscriptions"
          component={Subscriptions}
          options={{
            title: 'Subscriptions',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="subscriptions" size={size} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Downloads"
          component={Downloads}
          options={{
            title: 'Downloads',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="download" size={size} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Search"
          component={Search}
          options={{
            title: 'Search',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="search1" size={size} color={color} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </SafeAreaView>
  );
};

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {

      setIsSignedIn(!!user);
      setLoading(false);
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
              <Stack.Screen name="BottomTabBar" component={BottomTabBar} options={{ headerShown: false }} />
            </>
          ) : (
            <>
              <Stack.Screen name="TopTabBar" component={TopTabBar} options={{ headerShown: false }} />

            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;