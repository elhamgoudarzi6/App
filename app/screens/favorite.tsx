import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');

const FavoriteScreen = (props: any) => {
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
    ]
    const onPress = () => { };

    return (
        <SafeAreaView style={styles.container}>

            <FlatList style={{ marginTop: 30 }} showsVerticalScrollIndicator={false} data={data} numColumns={2} renderItem={({ item }) =>
                <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.card}>
                    <Image source={item.img} resizeMode="contain" style={styles.cardImage} />
                    <Text style={styles.txtTitle}>{item.title}</Text>
                    <Text style={styles.txtSubTitle}> {item.subtitle}</Text>
                </TouchableOpacity>
            } />

            <TouchableOpacity
                accessible={true}
                accessibilityLabel="Go back"
                accessibilityHint="Navigates to the previous screen"
                onPress={onPress}>
                <View >
                    <Text >Back</Text>
                </View>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

export default FavoriteScreen;

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
        paddingBottom: 20,
        paddingTop: 8,
        elevation: 2,
        borderRadius: 5,
        margin: 2,
    },
    cardImage: {
        height: width / 2,
        width: width / 2 - 15,
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
});