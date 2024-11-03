import { StyleSheet, View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateInputs = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (password.length < 8) {
      setError("Password should be at least 8 characters.");
      return false;
    }
    return true;
  };

  const handleSignUp = async () => {
    if (!validateInputs()) return;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate('Home');
      console.log("User registered successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <SafeAreaView style={styles.background}>
      <View style={{ flex: 1, alignItems: 'center', marginTop: 30 }}>
        <Text style={{ color: 'white', marginBottom: 23, fontSize: 30 }}>Create an Account</Text>

        <TextInput
          value={email}
          onChangeText={text => setEmail(text)}
          mode="outlined"
          outlineColor="black"
          activeOutlineColor="#157bcf"
          placeholderTextColor="grey"
          style={styles.input}
          placeholder='Email'
          textColor='black'
          outlineStyle={{ borderWidth: 2.5 }}
        />

        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          mode="outlined"
          outlineColor="black"
          activeOutlineColor="#157bcf"
          placeholderTextColor="grey"
          secureTextEntry
          style={styles.input}
          textColor='black'
          placeholder='Password'
          outlineStyle={{ borderWidth: 2.5 }}
        />

        {error ? <Text style={{ color: 'red', marginBottom: 30 }}>{error}</Text> : null}

        <Button mode="contained" style={styles.signup} onPress={handleSignUp}>
          Sign up
        </Button>
      </View>
    </SafeAreaView>
  );
}

export default Signup;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#020d17",
    height: "100%",
  },
  input: {
    width: "85%",
    marginBottom: 20,
    color: 'black',
    backgroundColor: 'white',
    height: 60,
  },
  signup: {
    width: "85%",
    borderRadius: 5,
    backgroundColor: '#157bcf',
  },
});
