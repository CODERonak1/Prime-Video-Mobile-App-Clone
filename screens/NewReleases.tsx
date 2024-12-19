import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import NewReleasesData from '../Data/NewAndHot/NewReleasesData'
import { useNavigation } from '@react-navigation/native';

interface NewAndHotType {
    id: number,
    name: string,
    description: string,
    image: string,
    videoUrl: string
}

const NewReleases = () => {
    const navigation = useNavigation();

    const renderItem = ({ item }: { item: NewAndHotType }) => {

        return (

            <View style={styles.contentContainer}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                />

                <Text style={styles.movieName}>{item.name}</Text>

                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>{item.description}</Text>
                </View>

                <Pressable
                    style={styles.watchNowBtn}
                    android_ripple={{ color: 'rgba(0, 0, 0, 0.2)', foreground: true, }}
                    onPress={() => navigation.navigate('VideoPage', { videoUrl: item.videoUrl, name: item.name })}
                >
                    <Text style={styles.watchNowBtnText}>Watch Now</Text>
                </Pressable>

            </View>

        )
    }

    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <FlatList
                    data={NewReleasesData}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    )
}

export default NewReleases

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#001027',
        height: '100%',
    },

    container: {
        // justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        color: 'white',
        fontSize: 40
    },

    contentContainer: {
        alignItems: 'center',
        marginTop: 50,
        borderColor: 'white',
        backgroundColor: '#04193d',
        height: 'auto',
        paddingVertical: 20,
        borderRadius: 20,
    },

    image: {
        height: 300,
        width: '90%',
        borderRadius: 10,
    },

    movieName: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },

    description: {
        color: 'white',
        fontSize: 12,
        marginTop: 10,

    },

    watchNowBtn: {
        paddingVertical: 12,
        marginTop: 30,
        borderRadius: 50,
        backgroundColor: '#0678ff',
        width: '40%'

    },

    watchNowBtnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    descriptionContainer: {
        width: '80%'
    },


})