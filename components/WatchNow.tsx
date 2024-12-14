import { StyleSheet, Text, View, Image, FlatList, Pressable, Dimensions, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import MovieData from '../Data/MovieData'

// to build the dot indicator code is generated by chat gpt

const { width } = Dimensions.get('window');

const WatchNow = () => {
    // generated by ai
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;

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
        );
    };

    // code generated by chat gpt
    const handleScroll = (event: any) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(contentOffsetX / width);
        setCurrentIndex(index);
    };

    return (
        <View style={styles.watchNowContainer}>
            <FlatList
                data={MovieData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}

                // code generated by chat gpt
                pagingEnabled
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false, listener: handleScroll }
                )}
            />

            {/* Dot Indicators */}
            {/* // code generated by chat gpt */}
            <View style={styles.dotContainer}>
                {MovieData.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            currentIndex === index ? styles.activeDot : styles.inactiveDot
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

export default WatchNow;

const styles = StyleSheet.create({
    watchNowContainer: {
        marginTop: 100,
    },

    watchNowImgs: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width, // Ensure each image takes full screen width
    },

    images: {
        width: width,
        height: 230,
        borderRadius: 1,
    },

    // styles for dot indicator is generated by chat gpt
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },

    activeDot: {
        backgroundColor: 'white',
    },

    inactiveDot: {
        backgroundColor: 'gray',
    },
});
