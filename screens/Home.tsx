import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import Header from '../components/Header';

const Home = () => {
    const handleSignOut = async () => {
        try {
            await signOut(auth); // Sign out from Firebase
            console.log("User signed out successfully!");

        } catch (error) {
            console.error("Error signing out: ", error.message);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#020d17' }}>
            <Header heading="Home"/>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: 25 }}>Home</Text>
                <Button
                    title="Sign Out"
                    onPress={handleSignOut}
                    color="#157bcf"
                />
            </View>
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({});
