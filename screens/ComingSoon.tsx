import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import NewReleasesData from '../Data/NewAndHot/ComingSoonData'

interface ComingSoonType {
    id: number,
    name: string,
    description: string,
    image: string,
    date: string
}

const ComingSoon = () => {

    const renderItem = ({ item }: { item: ComingSoonType }) => {

        return (

            <View style={styles.contentContainer}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                />

                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.movieName}>{item.name}</Text>

                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
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

export default ComingSoon

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

    descriptionContainer: {
        width: '80%'
    },

    date: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 12
    }
})