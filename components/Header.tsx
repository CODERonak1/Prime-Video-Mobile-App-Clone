import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {

    const navigation = useNavigation()

    return (
        // Header container
        <View style={styles.headerContainer}>
            {/* image container */}
            <View style={styles.imageContainer}>
                {/* prime video logo image in white color */}
                <Image
                    source={require('../assets/white-prime.png')}
                    style={styles.primeVideoImage}
                />
            </View>
            <View style={styles.btns}>

                <Pressable
                    style={styles.searchBtn}
                    onPress={() => navigation.navigate('Search')}
                >
                    <Ionicons name="search" size={26} color="white" />
                </Pressable>

                {/* Search icon */}

                {/* profile icon */}
                <Pressable
                    style={styles.profileBtn}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <Image
                        source={require('../assets/profile.png')}
                        style={styles.profileImg}
                    />
                </Pressable>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },

    imageContainer: {
        marginRight: 0,
        width: '40%',
        // borderWidth: 1,
        borderColor: 'white',
        height: 50,
        justifyContent: 'flex-start',

    },

    primeVideoImage: {
        height: 60,
        // borderWidth: 1,
        width: 120,
        borderColor: 'white',
    },

    profileImg: {
        height: 40,
        width: 50,
        // borderWidth: 1,
        borderColor: 'white',
    },

    searchBtn: {
        marginTop: 9,
        marginRight: 10
    },

    btns: {
        // borderWidth: 1,
        borderColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '20%',
        height: 50,
    },

    profileBtn: {
        // borderWidth: 1,
        width: 40,
        marginRight: 20,
        marginTop: 4
    }
})