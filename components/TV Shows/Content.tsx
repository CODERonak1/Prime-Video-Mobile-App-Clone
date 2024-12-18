import { StyleSheet, Text, View, FlatList, SectionList, Image, Pressable, Animated } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import ContentData from '../../Data/TVShows/ContentData';
import { useNavigation } from '@react-navigation/native';

// Defining the types
interface ContentItem {
    name: string;
    id: string;
    img: string;
    videoUrl: string;
}

interface ContentType {
    title: string;
    data: ContentItem[];
}

// Skeleton Loader Component
const SkeletonLoader = () => {
    const shimmerAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(shimmerAnim, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(shimmerAnim, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    const shimmerInterpolation = shimmerAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.7)'],
    });

    return (
        <View style={styles.skeletonContainer}>
            <Animated.View
                style={[
                    styles.skeletonImageContainer,
                    { backgroundColor: shimmerInterpolation },
                ]}
            />
        </View>
    );
};

// Rendering the image with pressable
const renderImageItem = ({
    item,
    navigation,
    imageStyle,
}: {
    item: ContentItem;
    navigation: any;
    imageStyle: any;
}) => {
    return (
        <View>
            {/* Pressable for making the image clickable */}
            <Pressable
                android_ripple={{ color: '#ffffff60', foreground: true }}
                style={styles.itemBtn}
                onPress={() =>
                    navigation.navigate('VideoPage', { videoUrl: item.videoUrl, name: item.name })
                }
            >
                {/* Content images */}
                <Image source={{ uri: item.img }} style={imageStyle} />
            </Pressable>
        </View>
    );
};

// Rendering the section content with skeleton loader logic
const renderSectionContent = ({
    section,
    navigation,
    loading,
}: {
    section: ContentType;
    navigation: any;
    loading: boolean;
}) => {
    // coded by chat gpt
    // Define custom styles for Amazon Original Series
    const isAmazonOriginalSeries = section.title === 'Amazon Original Series';
    const imageStyle = isAmazonOriginalSeries
        ? styles.amazonOriginalImages
        : styles.images;

    return (
        <FlatList
            data={loading ? Array(5).fill('') : section.data} // Show skeleton loader if loading
            renderItem={({ item }) =>
                loading ? (
                    <SkeletonLoader />
                ) : (
                    renderImageItem({ item, navigation, imageStyle })
                )
            }
            horizontal
            keyExtractor={(item, index) => index.toString()} // Use index for skeleton loader
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalListContainer}
        />
    );
};

// Main section content
const Content = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.contentContainer}>
            <SectionList
                sections={ContentData}
                renderSectionHeader={({ section }) => (
                    <Text style={styles.title}>{section.title}</Text>
                )}
                renderItem={() => null}
                renderSectionFooter={({ section }) =>
                    renderSectionContent({ section, navigation, loading })
                }
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default Content;

// Styles
const styles = StyleSheet.create({
    contentContainer: {
        marginTop: 30,
    },

    itemBtn: {
        marginHorizontal: 10,
        marginRight: 5,
        overflow: 'hidden',
        borderRadius: 4,
    },

    images: {
        height: 110,
        width: 200,
        resizeMode: 'cover',
        borderRadius: 4,
    },

    // coded by chatgpt
    amazonOriginalImages: {
        height: 200,
        width: 140,
        resizeMode: 'cover',
        borderRadius: 4,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 10,
        marginLeft: 20,
    },

    horizontalListContainer: {
        paddingBottom: 18,
    },

    // Skeleton loader styles
    skeletonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },

    skeletonImageContainer: {
        height: 110,
        width: 200,
        borderRadius: 4,
        backgroundColor: '#e0e0e0',
    },
});
