import React from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity, Image, Dimensions, SafeAreaView } from 'react-native';
const { width, height } = Dimensions.get('window');

const TagScreen = () => {
    const data = [
        { id: 0, img: require('../../assets/images/elee.jpg'), title: 'itechinsiders', subtitle: 'itechinsiders' },
        { id: 1, img: require('../../assets/images/elee.jpg'), title: 'itechinsiders', subtitle: 'itechinsiders' },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <Text>TagScreen</Text>
            <FlatList data={data} numColumns={3} renderItem={({ item, index }) =>
                <TouchableOpacity activeOpacity={0.9}>
                    <Image source={item.img} resizeMode="cover" style={styles.tag} />
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
        marginTop: -19
    },
    tag: {
        height: width / 3,
        width: width / 3,
        margin: 0.2
    }
});

export default TagScreen;


