import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

const Content = () => {
    return (
        <View style={styles.content}>
            <View>
                <Text style={styles.sectionTitle}>Amazon Original Series <Text style={{ color: 'grey' }}>></Text> </Text>

                <ScrollView horizontal style={styles.images}>
                    <Image
                        source={require('../assets/content/Citadel honey bunny.png')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../assets/content/Alex raider.png')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../assets/content/Boys.png')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../assets/content/Citadel.png')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../assets/content/Jack Ryan.png')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../assets/content/Reacher.png')}
                        style={styles.image}
                    />
                </ScrollView>
            </View>

            <View>
                <Text style={styles.sectionTitle}>Amazon Original Movies <Text style={{ color: 'grey' }}>></Text> </Text>

                <ScrollView horizontal style={styles.images}>
                    <Image
                        source={require('../assets/content/Without remorse.png')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../assets/content/7500.png')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../assets/content/Die hart.png')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../assets/content/Old knives.png')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../assets/content/Wall.png')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../assets/content/Aeronauts.png')}
                        style={styles.image}
                    />
                </ScrollView>
            </View>
        </View>
    )
}

export default Content;

const styles = StyleSheet.create({
    content: {
        marginTop: 10,
    },

    sectionTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 16,
        marginTop: 10,
        
    },

    images: {
        marginLeft: 10,
        // flexDirection: 'row',
    },

    image: {
        borderRadius: 7,
        height: 250,
        width: 155,
        marginLeft: 15,
    }

})