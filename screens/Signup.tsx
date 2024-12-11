import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Signup = () => {
    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.text}>Prime Video</Text>

            </View>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    background: {
        height: '100%',
        backgroundColor: '#04193d'
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },

    text: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    }
})