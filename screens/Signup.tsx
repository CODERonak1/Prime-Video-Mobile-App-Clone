import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isName, setIsName] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <View style={styles.signupText}>
                    <Text style={styles.text}>Create your account</Text>
                </View>
                <View style={styles.inputs}>
                    <TextInput
                        placeholder='Your name'
                        style={[styles.input, isName && styles.inputFocused]}
                        placeholderTextColor='grey'
                        textAlign='center'
                        value={name}
                        onChangeText={(text) => setName(text)}
                        onFocus={() => setIsName(true)}
                        onBlur={() => setIsName(false)}
                        cursorColor='black'
                    />

                    <TextInput
                        placeholder='Email or mobile number'
                        style={[styles.input, isEmailFocused && styles.inputFocused]}
                        placeholderTextColor='grey'
                        textAlign='center'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        onFocus={() => setIsEmailFocused(true)}
                        onBlur={() => setIsEmailFocused(false)}
                        cursorColor='black'
                    />

                    <TextInput
                        placeholder='Password'
                        style={[styles.input, isPasswordFocused && styles.inputFocused]}
                        secureTextEntry={true}
                        placeholderTextColor='grey'
                        textAlign='center'
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        onFocus={() => setIsPasswordFocused(true)}
                        onBlur={() => setIsPasswordFocused(false)}
                        cursorColor='black'
                    />
                </View>

                <Pressable style={styles.createAccBtn}
                    android_ripple={{ color: 'rgba(0, 0, 0, 0.2)' }}
                >
                    <Text style={styles.createAccText}>Create your account</Text>
                </Pressable>
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
        alignItems: 'center'
    },

    text: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold'
    },

    signupText: {
        marginTop: 100
    },

    inputs: {
        marginTop: 30,
        width: '80%'
    },

    input: {
        borderRadius: 40,
        borderWidth: 1,
        marginVertical: 6,
        borderColor: 'white',
        paddingVertical: 15,
        marginTop: 15,
        fontSize: 18,
        // color: 'white'
        color: 'black',
        backgroundColor: 'white',
        fontWeight: 'bold',
    },

    inputFocused: {
        borderColor: '#0678ff',
        borderWidth: 3
    },

    createAccBtn: {
        paddingVertical: 12,
        marginTop: 40,
        borderRadius: 50,
        backgroundColor: '#0678ff',
        width: '80%'
    },

    createAccText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    }
})