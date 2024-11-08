import { StyleSheet, View, Image, FlatList, Pressable, Dimensions } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';

const { width } = Dimensions.get('window'); 

type WatchNowProps = {
    path: any,
};

const Watch = ({ path }: WatchNowProps) => {
    return (
        <View style={styles.imageContainer}>
            <Pressable 
            onPress={() => console.log('Image pressed')}
            android_ripple={{ color: '#ffffff40', borderless: false, foreground: true }}
            >
                <Image
                    source={path}
                    style={styles.image}
                   
                />
            </Pressable>
        </View>
    );
};

const WatchNow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null); // Reference for FlatList

    const images = [
        require('../assets/watchnow/Flash.png'),
        require('../assets/watchnow/Apocalypse Z.png'),
        require('../assets/watchnow/Rings of Power.png'),
        require('../assets/watchnow/Stree 2.png'),
        require('../assets/watchnow/Trap.png'),
        require('../assets/watchnow/Like a dragon.png'),
    ];

    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % images.length;
                flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
                return nextIndex;
            });
        }, 5000);

       
        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef} // Assign ref to FlatList
                data={images}
                renderItem={({ item }) => <Watch path={item} />}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16} // Smooth scrolling experience
            />
            <View style={styles.dotContainer}>
                {images.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            currentIndex === index ? styles.activeDot : styles.inactiveDot,
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

export default WatchNow;

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
    },
    imageContainer: {
        width, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 400, 
        height: 250,
    },
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    dot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: 'white', 
    },
    inactiveDot: {
        backgroundColor: 'grey', 
    },
});