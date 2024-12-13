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
                    style={styles.image}
                />
            </View>

            <Pressable style={styles.searchBtn} onPress={() => navigation.navigate('Search')}>
                <Ionicons name="search" size={26} color="white" />
            </Pressable>
            <View style={styles.btns}>

                {/* Search icon */}

                {/* profile icon */}
                <Pressable style={styles.profileBtn}>
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
        flexDirection: 'row',
    },

    imageContainer: {
        marginLeft: 20,
        width: '26%',

    },

    image: {
        height: 350,
        // borderWidth: 1,
        width: 100,
        position: 'absolute',
        top: -150,
    },

    profileImg: {
        height: 100,
        width: 40,
        top: -26,
        // right: -20,
        // borderWidth: 1,
        marginRight: 50
    },

    searchBtn: {
        marginTop: 9,
        marginLeft: 160
    },

    btns: {
        flexDirection: 'row',
    },

    profileBtn: {
        // borderWidth: 1,
        width: 40,
        marginRight: 20,
    }
})