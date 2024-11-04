import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import Header from '../components/Header';

const Search = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#020d17' }}>
            <Header heading="Search" showButtons= {false}/>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: 25 }}>Search</Text>
            </View>
        </SafeAreaView>
    )
}

export default Search;

const styles = StyleSheet.create({})