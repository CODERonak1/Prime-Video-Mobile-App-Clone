import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import React from 'react'
import MovieData from '../Data/MovieData'

const WatchNow = () => {

    const renderItem = ({ item }: { item: Movies }) => {
        return (
            <View style={styles.watchNowImgs}>
                <Pressable>
                    <Image
                        source={{ uri: item.img }}
                        style={styles.images}
                    />
                </Pressable>
            </View>
        )
    }

    return (
        <View style={styles.watchNow}>
            <FlatList
                data={MovieData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default WatchNow

const styles = StyleSheet.create({
    watchNow: {
        marginTop: 100,
    },

    watchNowImgs: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    images: {
        width: 409,
        height: 230,
        borderRadius: 1,

    }
})