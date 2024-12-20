import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { useVideoPlayer, VideoView } from 'expo-video';
import AntDesign from '@expo/vector-icons/AntDesign';

// icons
import Ionicons from '@expo/vector-icons/Ionicons';

const VideoPage = () => {

    const Download = () => {
        console.log("Download stared!");

    }

    const route = useRoute();
    const { videoUrl, name } = route.params

    const player = useVideoPlayer(videoUrl, player => {
        player.loop = true;
        player.play();
    });

    const navigation = useNavigation()
    return (
        // background container
        <View style={styles.background}>
            {/* container of the complete screen */}
            <View style={styles.container}>

                {/* goes back to the previous screen */}
                <Pressable style={styles.arrowBackBtn} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={30} color="white" />
                </Pressable>

                {/* video container */}
                <View style={styles.videoContainer}>
                    <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture />
                </View>

                <Text style={styles.text}>{name}</Text>

                <View style={styles.btnContainer}>
                    <Pressable
                        style={styles.downloadBtn}
                        onPress={Download}
                        // android_ripple={{ color: 'rgba(255, 255, 255, 0.2)', foreground: true }}
                    >
                        <AntDesign name="download" size={30} color="white" style={styles.downloadIcon} />
                        <Text style={styles.downloadText}>Download</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default VideoPage

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#001027',
        height: '100%',
    },

    container: {
        // flex: 1,
        justifyContent: 'flex-start',
        // alignItems: 'center'
    },

    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 15,

    },

    arrowBackBtn: {
        marginLeft: 15,
        marginTop: 15,
    },

    videoContainer: {
        backgroundColor: 'black',
        height: '50%',
        width: ' 100%',
        marginTop: 10,

    },

    video: {
        height: '100%',
        width: '100%',
    },

    btnContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,

    },

    downloadBtn: {
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'white',
        padding: 8,
        borderRadius: 40,
    },

    downloadText: {
        color: 'white',
    },

    downloadIcon: {

    }

})