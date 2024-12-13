import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
// import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebaseConfig'
import { signOut } from 'firebase/auth'

const Home = () => {
    // const navigation = useNavigation()
    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.text}>Home</Text>
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
                    }}
                />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#001027',
        height: '100%',
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        color: 'white',
        fontSize: 40
    }
})