import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { auth } from '../firebaseConfig'; // Import the auth instance
import { signOut } from 'firebase/auth'; // Import signOut function

const Home = () => {
    const handleSignOut = async () => {
        try {
            await signOut(auth); // Sign out from Firebase
            console.log("User signed out successfully!");
            // Optionally, navigate back to the sign-in screen if using navigation
        } catch (error) {
            console.error("Error signing out: ", error.message);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#020d17' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: 25 }}>Home</Text>
                <Button 
                    title="Sign Out" 
                    onPress={handleSignOut} 
                    color="#157bcf" // Button color
                />
            </View>
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({});
