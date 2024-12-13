import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const Header = () => {
    return (
        <View style={styles.headerContainer}>

            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/white-prime.png')}
                    style={styles.image}
                />
            </View>


            <View style={styles.icons}>
                <Pressable style={styles.profileBtn} android_ripple={{ color: '#ffffff20' }}>
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

    icons: {

    },

    profileBtn: {

    },

    profileImg: {
        height: 110,
        width: 110,
        position: 'relative',
        top: -30,
        right: -20
    },
})