import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const VideoPage = () => {
    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.text}>Video Page</Text>
            </View>
        </View>
    )
}

export default VideoPage

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