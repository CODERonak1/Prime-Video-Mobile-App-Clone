import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';
import React from 'react';

const ContentSection = ({ title, images }) => (
    <View>
        <Text style={styles.sectionTitle}>{title} <Text style={styles.arrow}>></Text></Text>
        <ScrollView horizontal style={styles.images}>
            {images.map((imgSrc, index) => (
                <Pressable 
                    key={index} 
                    style={styles.imageContainer} 
                    android_ripple={{ color: '#ffffff40', borderless: false, foreground: true }}
                >
                    <Image source={imgSrc} style={styles.image} />
                </Pressable>
            ))}
        </ScrollView>
    </View>
);

const Content = () => (
    <View style={styles.content}>
        <ContentSection
            title="Amazon Original Series"
            images={[
                require('../assets/content/Citadel honey bunny.png'),
                require('../assets/content/Alex raider.png'),
                require('../assets/content/Boys.png'),
                require('../assets/content/Citadel.png'),
                require('../assets/content/Jack Ryan.png'),
                require('../assets/content/Reacher.png'),
            ]}
        />
        <ContentSection
            title="Amazon Original Movies"
            images={[
                require('../assets/content/Without remorse.png'),
                require('../assets/content/7500.png'),
                require('../assets/content/Die hart.png'),
                require('../assets/content/Old knives.png'),
                require('../assets/content/Wall.png'),
                require('../assets/content/Aeronauts.png'),
            ]}
        />
    </View>
);

export default Content;

const styles = StyleSheet.create({
    content: { marginTop: 10 },
    sectionTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 16,
        marginTop: 10,
    },
    arrow: { color: 'grey' },
    images: { marginLeft: 10 },
    imageContainer: {
        borderRadius: 7,
        overflow: 'hidden', // Ensures ripple effect stays within the rounded border
        marginLeft: 15,
    },
    image: {
        height: 250,
        width: 155,
    },
});