import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'

const Signin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <Image
                    source={require('../assets/splash-icon.png')}
                    style={styles.image}
                />

                <View style={styles.signinText}>
                    <Text style={styles.text}>Sign in with your</Text>
                    <Text style={styles.text}>Amazon account</Text>
                </View>

                <View style={styles.inputs}>
                    <TextInput
                        placeholder='Email or mobile phone number'
                        style={styles.input}
                        placeholderTextColor='white'
                        textAlign='center'
                        value={email}
                        onChangeText={(text) => setEmail(text)}

                    />

                    <TextInput
                        placeholder='Password'
                        style={styles.input}
                        secureTextEntry={true}
                        placeholderTextColor='white'
                        textAlign='center'
                        value={password}
                        onChangeText={(text) => setPassword(text)}


                    />
                    <Text style={styles.forgot}>Forgot your password?</Text>
                </View>

                <Pressable style={styles.continueBtn}
                    android_ripple={{ color: 'rgba(0, 0, 0, 0.2)' }}
                >
                    <Text style={styles.continueText}>Continue</Text>
                </Pressable>

            </View>
        </View>
    )
}

export default Signin

const styles = StyleSheet.create({
    background: {
        height: '100%',
        backgroundColor: '#04193d'
    },

    container: {
        flex: 1,
        alignItems: 'center'
    },

    text: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold'
    },

    image: {
        height: 100,
        width: 400,
        marginTop: 50
    },

    signinText: {
        marginTop: 40
    },

    inputs: {
        marginTop: 30,
        width: '80%'
    },

    input: {
        borderRadius: 50,
        borderWidth: 1,
        marginVertical: 6,
        borderColor: 'white',
        paddingVertical: 20,
        marginTop: 15,
        fontSize: 18,
        color: 'white'
    },

    forgot: {
        color: 'white',
        fontSize: 18,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginTop: 15,

    },

    continueBtn: {
        paddingVertical: 12,
        marginTop: 40,
        borderRadius: 50,
        backgroundColor: '#0678ff',
        width: '80%'
    },

    continueText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    }
})