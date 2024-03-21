import React, { useRef, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView, Animated, ImageBackground } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get('window');

const DetailsScreen = (props: any) => {
    const imgs = [
        { id: 0, img: 'https://api.drjaferi.ir/public/uploads/1.jpg' },
        { id: 1, img: 'https://api.drjaferi.ir/public/uploads/2.jpg' },
        { id: 2, img: 'https://api.drjaferi.ir/public/uploads/3.jpg' },
        { id: 3, img: 'https://api.drjaferi.ir/public/uploads/4.jpg' },
        { id: 4, img: 'https://api.drjaferi.ir/public/uploads/5.jpg' },
        { id: 5, img: 'https://api.drjaferi.ir/public/uploads/6.jpg' },
    ];
    const data = props.route.params.data;
    const [showMore, setShowMore] = useState(false);
    const [slider, setSlider] = useState(data.img);
    const onPress = (item: any) => setSlider(item);
    const scrollX = useRef(new Animated.Value(0)).current;

    const sliders = () => imgs.map((item, index) =>
        <TouchableOpacity activeOpacity={0.9} style={{ width: width - 20, height: 220 }} key={index}>
            <ImageBackground source={{ uri: item.img.toString() }} style={styles.slider} />
        </TouchableOpacity>
    )

    const gallery = () => imgs.map((item, index) =>
        <TouchableOpacity activeOpacity={0.9} onPress={() => onPress(item.img.toString())} key={index}>
            <Image source={{ uri: item.img.toString() }}
                resizeMode="stretch" style={{ width: 70, height: 70, borderRadius: 10, marginRight: 5 }} />
        </TouchableOpacity>
    )

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }])}
                scrollEventThrottle={1}>
                {sliders()}
            </ScrollView>
            <View style={styles.indicatorContainer}>
                {imgs.map((item, index) => {
                    const w = scrollX.interpolate({
                        inputRange: [
                            width * (index - 1),
                            width * index,
                            width * (index + 1),
                        ],
                        outputRange: [8, 16, 8],
                        extrapolate: 'clamp',
                    });
                    return (
                        <Animated.View key={index} style={[styles.dot, { width: w }]} />
                    );
                })}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', left: 20, right: 20, top: 45 }}>
                <MaterialCommunityIcons name="chevron-left" color="#000" size={24} style={{ backgroundColor: '#f8f8f8', padding: 5, borderRadius: 30, textAlign: 'center', }} />
                <Feather name="bookmark" color="#000" size={22} style={{ backgroundColor: '#f8f8f8', padding: 7, borderRadius: 30, textAlign: 'center' }} />
            </View>
            <Text style={styles.title}>{data.title}</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}>
                    <Text style={styles.txtaddr}>سعادت آباد خیابان بهاران کوچه الی</Text>
                    <AntDesign name="enviromento" color="#777" size={16} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10, marginHorizontal: 10 }}>
                    <View style={{ backgroundColor: '#fff', elevation: 4, paddingTop: 5, paddingHorizontal: 8, borderRadius: 5 }}>
                        <MaterialCommunityIcons name="bed-king-outline" style={styles.icons} />
                        <Text style={styles.txticon}>2</Text>
                    </View>
                    <View style={{ backgroundColor: '#fff', elevation: 4, paddingTop: 5, paddingHorizontal: 8, borderRadius: 5 }}>
                        <MaterialCommunityIcons name="shower" style={styles.icons} />
                        <Text style={styles.txticon}>1</Text>
                    </View>
                    <View style={{ backgroundColor: '#fff', elevation: 4, paddingTop: 5, paddingHorizontal: 8, borderRadius: 5 }}>
                        <MaterialCommunityIcons name="car-brake-parking" style={styles.icons} />
                        <Text style={styles.txticon}>دارد</Text>
                    </View>
                    <View style={{ backgroundColor: '#fff', elevation: 4, paddingTop: 5, paddingHorizontal: 8, borderRadius: 5 }}>
                        <MaterialCommunityIcons name="vector-square" style={styles.icons} />
                        <Text style={styles.txticon}>120</Text>
                    </View>
                </View>
                <Text style={styles.subTitle}>{showMore ? data.subtitle : `${data.subtitle.substring(0, 200)}`}</Text>
                <TouchableOpacity onPress={() => setShowMore(!showMore)}>
                    <Text style={styles.showmore}>{showMore ? "Show less" : "Show more"}</Text>
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                    elevation: 2, backgroundColor: '#fff',
                    borderColor: '#777', borderWidth: .3, borderCurve: 'circular',
                    borderRadius: 10, padding: 12
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../assets/images/elee.jpg')} resizeMode="stretch" style={{ width: 50, height: 50, borderRadius: 30 }} />
                        <View>
                            <Text style={styles.txtSub}>مشاور ملک</Text>
                            <Text style={styles.txtSub}>الهام گودرزی</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <AntDesign name="phone" color="#000" size={21} style={{ backgroundColor: '#eee', padding: 10, borderRadius: 30 }} />
                        <AntDesign name="message1" color="#000" size={24} style={{ marginLeft: 15, backgroundColor: '#eee', padding: 10, borderRadius: 30 }} />
                    </View>
                </View>
                <Text style={{ marginTop: 15, fontSize: 14, color: '#000', fontFamily: 'IranSansBold', textAlign: 'right', marginBottom: 10 }}>گالری</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {gallery()}
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    );
}

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 30,
        paddingHorizontal: 10
    },
    cardImage: {
        height: width * .6,
        width: '100%',
        borderRadius: 10,
        alignSelf: "center",
    },
    title: {
        marginTop: 15,
        fontSize: 14,
        color: '#000',
        fontFamily: 'IranSansBold',
        textAlign: 'right',
    },
    subTitle: {
        color: '#000',
        marginTop: 12,
        fontSize: 14,
        fontFamily: 'IranSans',
        textAlign: 'right',
    },
    icons: {
        backgroundColor: '#eee',
        paddingVertical: 7,
        paddingHorizontal: 9,
        borderRadius: 10,
        color: '#222',
        fontSize: 28
    },
    txticon: {
        fontSize: 14,
        fontFamily: 'IranSans',
        textAlign: 'center',
        marginTop: 2,
        color: '#000'
    },
    showmore: {
        fontSize: 12,
        color: 'blue',
        fontFamily: 'IranSans',
        textAlign: 'right',
        padding: 5
    },
    txtSub: {
        color: '#000',
        fontSize: 12,
        fontFamily: 'IranSans',
        textAlign: 'right',
        paddingHorizontal: 10,
    },
    txtaddr: {
        color: '#000',
        fontSize: 10,
        fontFamily: 'IranSans',
    },
    slider: {
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        height: 230,
    },
    textContainer: {
        backgroundColor: 'rgba(0,0,0, 0.7)',
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 5,
    },
    infoText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    dot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: 'silver',
        marginHorizontal: 4,
    },
    indicatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});