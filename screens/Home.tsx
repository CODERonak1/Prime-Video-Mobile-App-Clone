import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebaseConfig'
import { signOut } from 'firebase/auth'

const Home = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'black', fontSize: 40 }}>Home</Text>
            <Button
                title='Log out'
                onPress={() => {
                    signOut(auth)
                        .then(() => {
                            console.log('User signed out');
                        })
                        .catch((error) => {
                            console.log('Error signing out:', error);
                        });
                    navigation.navigate('TopTabBar')
                }}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})