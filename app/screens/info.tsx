import React, { useEffect, useRef, useState } from 'react';
import { Animated, StatusBar, StyleSheet, Text, View, ScrollView, ImageBackground, SafeAreaView } from 'react-native';

const InfoScreen = (props: any) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0)).current;
    const introAnim = useRef(new Animated.Value(100)).current;
    const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

    const fadeIn = () => {
        Animated.timing(fadeAnim, { toValue: 1, duration: 1000, useNativeDriver: true }).start();
    };

    const scaleIn = () => {
        Animated.timing(scaleAnim, { toValue: 1, duration: 3000, useNativeDriver: true }).start();
    };

    const introIn = () => {
        Animated.timing(introAnim, { toValue: -5, duration: 2000, useNativeDriver: true }).start();
    };

    useEffect(() => {
        fadeIn();
        scaleIn();
        introIn();
    });

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#777" />
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>{props.name}</Text>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 42,
        textAlign: 'center',
        backgroundColor: '#000',
        fontFamily: 'Snapp',
        opacity: .8
    },
});

export default InfoScreen;


