import { StyleSheet, View, FlatList, Pressable, Dimensions, Animated, Image } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import WatchNowData from '../../Data/Home/WatchNowData';
import { useNavigation } from '@react-navigation/native';

// Get screen width
const { width } = Dimensions.get('window');

const WatchNow = () => {
  // types
  interface Movies {
    id: number;
    name: string;
    img: string;
    videoUrl: string;
  }

  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true); // State to track loading status
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Simulate loading data for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const renderItem = ({ item }: { item: Movies }) => {
    return (
      <View style={styles.watchNowImgs}>
        <Pressable
          android_ripple={{ color: '#ffffff40', foreground: true }}
          onPress={() => navigation.navigate('VideoPage', { videoUrl: item.videoUrl, name: item.name })}
          style={styles.onPressImg}
        >
          <Image source={{ uri: item.img }} style={styles.images} />
        </Pressable>
      </View>
    );
  };

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    setCurrentIndex(index);
  };

  // Custom Skeleton Loader
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
          style={[styles.skeletonImage, { backgroundColor: shimmerInterpolation }]}
        />
      </View>
    );
  };

  return (
    <View style={styles.watchNowContainer}>
      {loading ? (
        <SkeletonLoader /> // Show skeleton loader when loading
      ) : (
        <FlatList
          data={WatchNowData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false, listener: handleScroll }
          )}
        />
      )}

      {/* Dot Indicators */}
      <View style={styles.dotContainer}>
        {WatchNowData.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index ? styles.activeDot : styles.inactiveDot]}
          />
        ))}
      </View>
    </View>
  );
};

export default WatchNow;

const styles = StyleSheet.create({
  watchNowContainer: {
    marginTop: 40,
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

  onPressImg: {
    overflow: 'hidden',
  },

  // Skeleton styles
  skeletonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width, // Ensure skeleton is the same size as the image
  },

  skeletonImage: {
    width: width,
    height: 230,
    borderRadius: 1,
    backgroundColor: '#e0e0e0', // Light grey for skeleton
  },

  // Shimmer effect animation
  shimmer: {
    animationDuration: '1.5s',
    animationName: 'shine', // Custom shimmer animation
  },
});
