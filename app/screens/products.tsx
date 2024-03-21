import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');

const ProductsScreen = (props: any) => {
    const data = [
        { id: 0, img: require('../../assets/images/ipad.png'), title: 'itechinsiders', subtitle: 'itechinsiders' },
        { id: 1, img: require('../../assets/images/ipad.png'), title: 'itechinsiders', subtitle: 'itechinsiders' },
        { id: 2, img: require('../../assets/images/ipad.png'), title: 'itechinsiders', subtitle: 'itechinsiders' },
        { id: 3, img: require('../../assets/images/ipad.png'), title: 'itechinsiders', subtitle: 'itechinsiders' },
        { id: 4, img: require('../../assets/images/ipad.png'), title: 'itechinsiders', subtitle: 'itechinsiders' },
        { id: 5, img: require('../../assets/images/ipad.png'), title: 'itechinsiders', subtitle: 'itechinsiders' },
        { id: 6, img: require('../../assets/images/ipad.png'), title: 'itechinsiders', subtitle: 'itechinsiders' },
        { id: 7, img: require('../../assets/images/ipad.png'), title: 'itechinsiders', subtitle: 'itechinsiders' },
        { id: 8, img: require('../../assets/images/ipad.png'), title: 'itechinsiders', subtitle: 'itechinsiders' },
        { id: 9, img: require('../../assets/images/ipad.png'), title: 'itechinsiders', subtitle: 'itechinsiders' },
        { id: 10, img: require('../../assets/images/ipad.png'), title: 'itechinsiders', subtitle: 'itechinsiders' },
    ]
    const onPress = () => { };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList style={{ marginTop: 30 }} data={data} numColumns={2}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={({ item }) =>
                    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.card}>
                        <Image source={item.img} resizeMode="contain" style={styles.cardImage} />
                        <Text style={styles.txtTitle}>{item.title}</Text>
                        <Text style={styles.txtSubTitle}> {item.subtitle}</Text>
                        <Text style={styles.price}>2000$</Text>
                        <Ionicons name='add-circle-outline' color='pink' size={32} style={{ position: 'absolute', bottom: 15, right: 15 }} onPress={onPress} />
                    </TouchableOpacity>
                } />
        </SafeAreaView>
    );
}

export default ProductsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    card: {
        backgroundColor: '#fff',
        alignItems: "center",
        borderColor: '#ccc',
        borderWidth: .2,
        paddingBottom: 20,
        paddingTop: 8,
        elevation: 2,
        // borderRadius: 15,
        // margin:.5,
    },
    cardImage: {
        height: width / 2,
        width: width / 2,
    },
    txtTitle: {
        fontSize: 14,
        color: '#000',
        fontFamily: 'IranSans',
    },
    txtSubTitle: {
        color: '#777',
        fontSize: 12,
        fontFamily: 'IranSans',
    },
    price: {
        backgroundColor: 'pink',
        paddingHorizontal: 10,
        alignSelf: 'center',
        marginTop: 3,
        borderRadius: 10,
        color: '#fff',
        fontFamily: 'IranSans',
    }
});