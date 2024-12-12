import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'

const Signin = () => {

    // setting the values
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // when focused on the input
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    return (
        // background color of the screen
        <View style={styles.background}>
            {/* container for everything shown to the screen */}
            <View style={styles.container}>
                {/* prime video image */}
                <Image
                    source={require('../assets/splash-icon.png')}
                    style={styles.image}
                />

                {/* sign in with your account text */}
                <View style={styles.signinText}>
                    <Text style={styles.text}>Sign in with your</Text>
                    <Text style={styles.text}>Amazon account</Text>
                </View>

                {/* input container */}
                <View style={styles.inputs}>
                    {/* Text input for email or phone number */}
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

                    {/* textinput for password */}
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
                    <Text style={styles.forgot}>Forgot your password?</Text>
                </View>

                {/* continue button */}
                <Pressable style={styles.continueBtn}
                    android_ripple={{ color: 'rgba(0, 0, 0, 0.2)' }}
                >
                    <Text style={styles.continueText}>Continue</Text>
                </Pressable>

                {/* <View>
                   
                </View> */}

            </View>
        </View>
    )
}

export default Signin

const styles = StyleSheet.create({
    // backgroud of the screen
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