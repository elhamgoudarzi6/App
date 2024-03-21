import React, { useEffect } from 'react';
import { SafeAreaView, TouchableOpacity, StyleSheet, Image, FlatList, Dimensions, Text, View } from 'react-native';
const { width, height } = Dimensions.get('window');

const StoryScreen = (props: any) => {
    const data = [
        { id: 0, img: require('../../assets/images/gol.jpg'), title: 'plant' },
        { id: 1, img: require('../../assets/images/gol.jpg'), title: 'plant' },
        { id: 2, img: require('../../assets/images/gol.jpg'), title: 'plant' },
        { id: 3, img: require('../../assets/images/gol.jpg'), title: 'plant' },
        { id: 4, img: require('../../assets/images/gol.jpg'), title: 'plant' },
        { id: 5, img: require('../../assets/images/gol.jpg'), title: 'plant' },
        { id: 6, img: require('../../assets/images/gol.jpg'), title: 'plant' },
    ]
    const onPress = () => { };
    //inverted
    return (
        <SafeAreaView style={{ marginVertical: 25, alignItems: 'center' }}>
            <FlatList horizontal showsHorizontalScrollIndicator={false}
                data={data} renderItem={({ item }) =>
                    <View>
                        <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.card}>
                            <Image source={item.img} resizeMode="contain" style={styles.cardImage} />
                        </TouchableOpacity>
                        <Text style={styles.txt}>{item.title}</Text>
                    </View>
                } />
        </SafeAreaView>
    );
}

export default StoryScreen;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderColor: '#eee',
        borderWidth: 4,
        elevation: 2,
        borderRadius: 60,
        marginHorizontal: 5,
    },
    cardImage: {
        height: 60,
        width: 60,
        borderRadius: 60,
        borderColor: '#999',
        borderWidth: .8,
    },
    txt: {
        color: '#555',
        fontSize: 12,
        fontFamily: 'IranSans',
        textAlign: 'center',
        marginTop: 5
    },
});