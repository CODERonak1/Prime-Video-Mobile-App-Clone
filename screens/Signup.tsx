import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

const Signup = () => {
  return (
    <SafeAreaView style={styles.background}>
      <View>
        <Text style={{ color: 'white', fontSize: 30 }}>Signup</Text>
      </View>
    </SafeAreaView>
  )
}

export default Signup;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#00050e",
    height: "100%",
  }
})