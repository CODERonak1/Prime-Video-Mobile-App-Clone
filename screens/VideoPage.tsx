import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video'; // Using expo-video
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';

const VideoPage = ({ route, navigation }) => {
    const { videoUrl, name } = route.params; // Video path passed from the previous screen
    const [localUri, setLocalUri] = useState(null);
    const [isDownloading, setIsDownloading] = useState(false);
    const [isDownloaded, setIsDownloaded] = useState(false); // Track if video is downloaded

    // Check if the video is already downloaded when the page loads
    useEffect(() => {
        const checkIfDownloaded = async () => {
            const downloadedVideos = await AsyncStorage.getItem('downloadedVideos');
            const videos = downloadedVideos ? JSON.parse(downloadedVideos) : [];
            const videoExists = videos.some(video => video.uri === videoUrl);
            setIsDownloaded(videoExists);
        };
        checkIfDownloaded();
    }, [videoUrl]);

    // Download the video to local storage
    const downloadVideo = async (videoUrl) => {
        try {
            setIsDownloading(true); // Start downloading
            console.log('Download started!');

            // destination path for the video in local storage
            const downloadDest = FileSystem.documentDirectory + videoUrl.split('/').pop();
            const { uri } = await FileSystem.downloadAsync(videoUrl, downloadDest);

            console.log('Download successful, file saved to:', uri);
            setLocalUri(uri); // Set the local URI to render the video
            setIsDownloading(false); // Stop the download
            setIsDownloaded(true); // Mark as downloaded

            // Saving the downloaded video URI to AsyncStorage
            const downloadedVideos = await AsyncStorage.getItem('downloadedVideos');
            const videos = downloadedVideos ? JSON.parse(downloadedVideos) : [];
            videos.push({ name, uri });
            await AsyncStorage.setItem('downloadedVideos', JSON.stringify(videos));

            Alert.alert('Download Complete', 'The video has been downloaded successfully.');
        } catch (error) {
            console.error('Error downloading video:', error);
            setIsDownloading(false); // Stop the download
            Alert.alert('Download Failed', 'There was an error downloading the video.');
        }
    };

    // Video player using the downloaded video URI or the remote URL for streaming
    const player = useVideoPlayer(localUri || videoUrl, (player) => {
        player.loop = true;
        player.play();
    });

    return (
        <View style={styles.container}>
            <Pressable style={styles.arrowBackBtn} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={30} color="white" />
            </Pressable>

            {localUri || videoUrl ? (
                <View style={styles.videoContainer}>
                    <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture />
                </View>
            ) : (
                <Text style={styles.text}>No video available. Please download it.</Text>
            )}

            <Text style={styles.text}>{name}</Text>

            <Pressable
                style={styles.downloadBtn}
                onPress={() => {
                    if (!isDownloaded) {
                        downloadVideo(videoUrl);
                    }
                }} // Trigger the download when the user clicks the button
                disabled={isDownloading || isDownloaded}
            >
                <AntDesign
                    name={isDownloaded ? 'check' : isDownloading ? 'loading1' : 'download'}
                    size={30}
                    color="white"
                    style={styles.downloadIcon}
                />
                <Text style={styles.downloadText}>{isDownloading ? 'Downloading...' : isDownloaded ? 'Downloaded' : 'Download'}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001027',
    },
    arrowBackBtn: {
        marginTop: 15,
        marginLeft: 15,
    },
    videoContainer: {
        backgroundColor: 'black',
        height: '30%',
        width: '100%',
        marginTop: 10,
    },
    video: {
        height: '100%',
        width: '100%',
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 15,
    },
    downloadBtn: {
        alignItems: 'center',
        padding: 8,
        borderRadius: 40,
        marginTop: 20,
    },
    downloadText: {
        color: 'white',
    },
    downloadIcon: {},
});

export default VideoPage;
