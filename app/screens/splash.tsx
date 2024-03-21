import React, { useEffect, useRef } from 'react';
import { Animated, StatusBar, StyleSheet, Text, View, Image, Dimensions, SafeAreaView } from 'react-native';
const { width, height } = Dimensions.get('window');
import AntDesign from "react-native-vector-icons/AntDesign";

const SplashScreen = (props: any) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0)).current;
    const introAnim = useRef(new Animated.Value(height + height * 0.2)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, { toValue: 1, duration: 1600, useNativeDriver: true }).start();
    };

    const scaleIn = () => {
        Animated.timing(scaleAnim, { toValue: 1, duration: 1500, useNativeDriver: true }).start();
    };

    const introIn = () => {
        Animated.timing(introAnim, { toValue: height * 0.3, duration: 1500, useNativeDriver: true }).start();
    };

    useEffect(() => {
        fadeIn();
        scaleIn();
        introIn();
        setTimeout(() => { props.navigation.navigate('MyDrawer') }, 1500);
    });

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true} barStyle="light-content" />
            <Animated.Image style={[styles.logo, { opacity: fadeAnim }]} source={require('../../assets/images/logo.png')} />
            {/* <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                <Text style={styles.title}>دکمه</Text>
            </Animated.View> */}
            {/* <Animated.View style={[styles.version, { transform: [{ translateY: introAnim }] }]} >
                <AntDesign name="copyright" color="#333" size={9} />
                <Text style={styles.txtversion}>Designed & Developed by Apprad</Text>
            </Animated.View> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: 100,
        height: 100,
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        fontFamily: 'Snapp'
    },
    version: {
        flexDirection: 'row',
        marginTop: 50
    },
    txtversion: {
        fontSize: 11,
        textAlign: 'center',
        fontFamily: 'Koloche',
        marginTop: -2,
        marginLeft: 2
    },
});

export default SplashScreen;

