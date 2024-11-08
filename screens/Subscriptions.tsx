import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import React from 'react';

const Subscriptions = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#020d17' }}>
            <Header heading="Subscriptions" showButtons={false} />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: 25 }}>Subscriptions</Text>
            </View>
        </SafeAreaView>
    )
}

export default Subscriptions;

const styles = StyleSheet.create({})