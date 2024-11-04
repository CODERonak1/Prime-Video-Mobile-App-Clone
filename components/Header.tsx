import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

type HeaderProps = {
    heading: string;
    showButtons?: boolean; // New prop to control button visibility
};

const Header = ({ heading, showButtons = true }: HeaderProps) => {
    return (
        <View style={styles.header}>
            <View style={styles.textAndBtn}>
                <Text style={styles.text}>{heading}</Text>

                {showButtons && (
                    <>
                        <Pressable style={styles.btn}>
                            <Text style={styles.btnText}>Movies</Text>
                        </Pressable>

                        <Pressable style={styles.btn}>
                            <Text style={styles.btnText}>TV shows</Text>
                        </Pressable>
                    </>
                )}
            </View>

            <View style={styles.icons}>
                <View style={{ marginRight: 30 }}>
                    <FontAwesome5 name="chromecast" size={28} color="grey" />
                </View>

                <View>
                    <FontAwesome5 name="chromecast" size={28} color="grey" />
                </View>
            </View>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    text: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        top: -28,
    },

    textAndBtn: {
        marginLeft: 22,
        flexDirection: 'row',
        alignItems: 'center',
    },

    btn: {
        marginTop: 14,
        marginRight: 8,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

    btnText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },

    icons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 22,
        position: 'relative',
        top: -35
    },
});