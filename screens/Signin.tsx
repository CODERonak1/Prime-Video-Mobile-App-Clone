import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

const Login = () => {
  return (
    <SafeAreaView style={styles.background}>
      <View>
        <Text style={{ color: 'white', fontSize: 30 }}>Signin</Text>
      </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#00050e",
    height: "100%",
  }
})