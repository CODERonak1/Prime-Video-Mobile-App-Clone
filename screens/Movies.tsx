import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import React from 'react'
// import { useNavigation } from '@react-navigation/native';
// import { auth } from '../firebaseConfig'
// import { signOut } from 'firebase/auth'

// components
import Header from '../components/Header'
import WatchNow from '../components/Movies/WatchNow'
import Content from '../components/Movies/Content'

const Movies = () => {
    // const navigation = useNavigation()

    const data = [
        { id: 'header', render: () => <Header /> },
        { id: 'watchNow', render: () => <WatchNow /> },
        { id: 'content', render: () => <Content /> }
    ]

    return (
        <View style={styles.background}>
            <View style={styles.container}>

                <FlatList
                    data={data}
                    renderItem={({ item }) => item.render()}
                />
                {/* <Text style={styles.text}>Home</Text> */}
                {/* <Button
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
                /> */}
            </View>
        </View>
    )
}

export default Movies

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#001027',
        height: '100%',
    },

    container: {
        flex: 1,
    },

    text: {
        color: 'white',
        fontSize: 40
    }
})