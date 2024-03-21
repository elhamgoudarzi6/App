import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const CartScreen = (props: any) => {
    const data = [
        { id: 0, img: require('../../assets/images/ipad.png'), title: 'itechinsiders', subtitle: 'itechinsiders' },
        { id: 1, img: require('../../assets/images/ipad.png'), title: 'itechinsiders', subtitle: 'itechinsiders' },
        { id: 2, img: require('../../assets/images/ipad.png'), title: 'itechinsiders', subtitle: 'itechinsiders' },
        { id: 3, img: require('../../assets/images/ipad.png'), title: 'itechinsiders', subtitle: 'itechinsiders' },
        { id: 4, img: require('../../assets/images/ipad.png'), title: 'itechinsiders', subtitle: 'itechinsiders' },
        { id: 5, img: require('../../assets/images/ipad.png'), title: 'itechinsiders', subtitle: 'itechinsiders' },
        { id: 6, img: require('../../assets/images/ipad.png'), title: 'itechinsiders', subtitle: 'itechinsiders' },
        { id: 7, img: require('../../assets/images/ipad.png'), title: 'itechinsiders', subtitle: 'itechinsiders' },
    ]
    const onPress = () => { };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList style={{ marginTop: 30 }} data={data} renderItem={({ item }) =>
                <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.card}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={item.img} resizeMode="contain" style={styles.cardImage} />
                        <View style={{ flex: 4 }}>
                            <Text style={styles.txtTitle}>{item.title}</Text>
                            <Text style={styles.txtSubTitle}> {item.subtitle}</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={styles.price}>20$</Text>
                            <Ionicons name='remove-circle-outline' color='pink' size={28} style={{ marginTop: 10 }} onPress={onPress} />
                        </View>
                    </View>
                </TouchableOpacity>
            } />
        </SafeAreaView>
    );
}

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    card: {
        height: 100,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#777',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 2,
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginVertical: 5,
        marginHorizontal: 15,
    },
    cardImage: {
        height: 90,
        width: 90,
        flex: 2
    },
    txtTitle: {
        fontSize: 14,
        color: '#000',
        fontFamily: 'IranSans',
    },
    txtSubTitle: {
        color: '#777',
        fontSize: 12,
        marginTop: 3,
        fontFamily: 'IranSans',
        //  width: '90%'
    },
    price: {
        backgroundColor: 'pink',
        paddingHorizontal: 10,
        borderRadius: 10,
        color: '#fff',
        fontFamily: 'IranSans',
    }
});