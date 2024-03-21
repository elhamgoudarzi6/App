import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Dimensions, SafeAreaView } from 'react-native';
const { width, height } = Dimensions.get('window');

const ReelScreen = () => {
    const data = [
        { id: 0, img: require('../../assets/images/elee.jpg'), title: 'itechinsiders', subtitle: 'itechinsiders' },
        { id: 1, img: require('../../assets/images/elee.jpg'), title: 'itechinsiders', subtitle: 'itechinsiders' },
        { id: 2, img: require('../../assets/images/elee.jpg'), title: 'itechinsiders', subtitle: 'itechinsiders' },
        { id: 3, img: require('../../assets/images/elee.jpg'), title: 'itechinsiders', subtitle: 'itechinsiders' },
    ]
    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={data} numColumns={3} renderItem={({ item, index }) =>
                <TouchableOpacity activeOpacity={0.9}>
                    <Image source={item.img} resizeMode="cover" style={styles.reel} />
                </TouchableOpacity>
            } />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    reel: {
        height: width / 2,
        width: width / 3,
        margin: 0.2
    }
});

export default ReelScreen;

