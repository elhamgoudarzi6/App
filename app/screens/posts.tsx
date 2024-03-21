import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Image, Dimensions, SafeAreaView } from 'react-native';
const { width, height } = Dimensions.get('window');

const PostScreen = () => {
    const data = [
        { id: 0, img: require('../../assets/images/elee.jpg'), title: 'itechinsiders', subtitle: 'itechinsiders' },
        { id: 1, img: require('../../assets/images/elee.jpg'), title: 'itechinsiders', subtitle: 'itechinsiders' },
        { id: 2, img: require('../../assets/images/elee.jpg'), title: 'itechinsiders', subtitle: 'itechinsiders' },
        { id: 3, img: require('../../assets/images/elee.jpg'), title: 'itechinsiders', subtitle: 'itechinsiders' },
        { id: 4, img: require('../../assets/images/elee.jpg'), title: 'itechinsiders', subtitle: 'itechinsiders' },
    ]

    useEffect(() => {

    });

    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={data} numColumns={3} renderItem={({ item, index }) =>
                <TouchableOpacity activeOpacity={0.9}>
                    <Image source={item.img} resizeMode="cover" style={styles.post} />
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
    post: {
        height: width / 3,
        width: width / 3,
        margin: 0.2
    }
});

export default PostScreen;


