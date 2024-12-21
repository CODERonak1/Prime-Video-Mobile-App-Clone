import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from '@expo/vector-icons/Ionicons';

const Downloads = ({ navigation }) => {
    const [downloadedVideos, setDownloadedVideos] = useState([]);

    // Fetch downloaded videos from AsyncStorage
    useEffect(() => {
        const fetchDownloadedVideos = async () => {
            const downloadedVideosData = await AsyncStorage.getItem('downloadedVideos');
            if (downloadedVideosData) {
                setDownloadedVideos(JSON.parse(downloadedVideosData));
            }
        };
        fetchDownloadedVideos();
    }, []);

    const renderItem = ({ item }) => (
        <Pressable
            style={styles.videoItem}
            onPress={() => navigation.navigate('VideoPage', { videoUrl: item.uri, name: item.name })}
        >
            <Text style={styles.videoText}>{item.name}</Text>
            <Ionicons name="play-circle" size={30} color="white" />
        </Pressable>
    );

    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.text}>Downloads</Text>
                <FlatList
                    data={downloadedVideos}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#001027',
        height: '100%',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 40,
    },
    videoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
    videoText: {
        color: 'white',
        fontSize: 20,
        marginRight: 10,
    },
});

export default Downloads;
