import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    
    <SafeAreaView style={styles.background}>
    
      <View style={{ flex: 1, alignItems: 'center', marginTop: 30 }}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          mode="outlined"
          outlineColor="white"
          activeOutlineColor="white"
          placeholderTextColor="grey"
          style={styles.input}
          placeholder='Email'
          textColor='white'

        />

        <TextInput
          label="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          mode="outlined"
          outlineColor="white"
          activeOutlineColor="white"
          placeholderTextColor="grey"
          secureTextEntry
          style={styles.input}
          textColor='white'
          placeholder='Password'
        />
      </View>
    </SafeAreaView>
  );
}

export default Login;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#00050e",
    height: "100%",
  },

  input: {
    width: "85%",
    marginBottom: 20,
    color: 'white',
    backgroundColor: '#00050e',
    height: 60
  }
});