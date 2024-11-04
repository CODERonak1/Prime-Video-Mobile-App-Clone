import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

const Downloads = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#020d17' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: 25 }}>Prime</Text>
            </View>
        </SafeAreaView>
    )
}

export default Downloads;

const styles = StyleSheet.create({})