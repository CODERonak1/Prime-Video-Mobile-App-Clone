import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return (
    <SafeAreaView style={styles.background}>
      <View style={{ flex: 1, alignItems: 'center', marginTop: 30 }}>
      <Text style={{ color: 'white', marginBottom: 23, fontSize: 30 }}>Welcome</Text>

        <TextInput
          // label="Name"
          value={name}
          onChangeText={text => setName(text)}
          mode="outlined"
          outlineColor="black"
          activeOutlineColor="#157bcf"
          placeholderTextColor="grey"
          style={styles.input}
          placeholder='Name'
          textColor='black'
          outlineStyle={{
            borderWidth: 2.5,
          }}
        />

        <TextInput
          // label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          mode="outlined"
          outlineColor="black"
          activeOutlineColor="#157bcf"
          placeholderTextColor="grey"
          style={styles.input}
          placeholder='Email'
          textColor='black'
          outlineStyle={{
            borderWidth: 2.5,
          }}
        />

        <TextInput
          // label="Password"
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
          outlineStyle={{
            borderWidth: 2.5,
          }}
        />

        <Button mode="contained" style={styles.signup} onPress={() => console.log('Pressed')}>
          Sign Up
        </Button>
      </View>
    </SafeAreaView>
  )
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
    color: 'white',
    backgroundColor: 'white',
    height: 60
  },

  signup: {
    width: "85%",
    borderRadius: 5,
    backgroundColor: '#157bcf'
  }
})