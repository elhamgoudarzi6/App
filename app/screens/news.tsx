import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions, Animated, PanResponder, Easing } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get('window');
import { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const NewsScreen = (props: any) => {
    const [activeItem, setActiveItem] = useState(0)
    const scrollY = useSharedValue('#cc9');
    const rotateAnim = useRef(new Animated.Value(0)).current;
    const _touchX = new Animated.Value(width / 2 - 145);

    const _onPanGestureEvent = () => {
        Animated.event([{ nativeEvent: { x: _touchX } }], {
            useNativeDriver: true,
        });
        console.log('ok')
    }
    const INITIAL_POS_Y_INPUT = -50;

    const inputSv = useSharedValue(INITIAL_POS_Y_INPUT);

    const inputAnimatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateY: inputSv.value }],
    }));

    useEffect(() => {

        Animated.timing(rotateAnim, {
            toValue: 1,
            duration: 5000,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start();
    }, [rotateAnim]);

    const spin = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });
    const pan2 = useRef(new Animated.Value(0)).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { pan2 }]),
            onPanResponderRelease: () => {
                pan2.extractOffset();
            },
        }),
    ).current;

    const pan = Gesture.Pan()
        .onStart(() => {
            console.log('onStart');
            "worklet";
            scrollY.value = withSpring('#888');
            console.log(scrollY.value);
        })
        .onFinalize(() => {
            "worklet";
            scrollY.value = withSpring('#cc9');
            console.log('onFinalize');
            console.log(scrollY.value);
        });


    const data = [
        { id: 0, img: 'https://api.drjaferi.ir/public/uploads/1.jpg', title: '83 متر , فول نوسازی , سعادت اباد', subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' },
        { id: 1, img: 'https://api.drjaferi.ir/public/uploads/2.jpg', title: '100 متر , فول نوسازی , سعادت اباد', subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' },
        { id: 2, img: 'https://api.drjaferi.ir/public/uploads/3.jpg', title: '83 متر , فول نوسازی , سعادت اباد', subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' },
        { id: 3, img: 'https://api.drjaferi.ir/public/uploads/4.jpg', title: '83 متر , فول نوسازی , سعادت اباد', subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' },
        { id: 4, img: 'https://api.drjaferi.ir/public/uploads/5.jpg', title: '83 متر , فول نوسازی , سعادت اباد', subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' },
        { id: 5, img: 'https://api.drjaferi.ir/public/uploads/6.jpg', title: '83 متر , فول نوسازی , سعادت اباد', subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' },
    ];

    const onPress = (item: any) => {
        console.log(item.img);
    };

    const list = () => data.map((item, index) =>
        <TouchableOpacity activeOpacity={0.9} onPress={() => props.navigation.navigate('Details', { data: item })} style={styles.itm} key={index}>
            <Image source={{ uri: item.img.toString() }} resizeMode="stretch" style={styles.cardImg} />
            <Text style={styles.txt}>{item.title}</Text>
        </TouchableOpacity>
    )

    const list1 = () => data.map((item, index) =>
        <TouchableOpacity activeOpacity={0.9} onPress={() => onPress(item)} style={styles.card} key={index}>
            <Image source={{ uri: item.img.toString() }} resizeMode="stretch" style={styles.cardImage} />
            <Text style={styles.txtTitle}>{item.title}</Text>
            <Text style={styles.txtSubTitle}>{item.subtitle}</Text>
        </TouchableOpacity>
    )

    const list2 = () => data.map((item, index) =>
        <TouchableOpacity accessible={true} activeOpacity={0.9} style={styles.item} onPress={() => setActiveItem(index)} key={index}>
            <Animated.View style={index == activeItem ? { transform: [{ translateY: -2 }] } : null}>
                <Image source={{ uri: item.img.toString() }} resizeMode="cover" style={styles.cardImage2} />
                <Text style={styles.txtTitle2}>{item.title}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, marginHorizontal: 15 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.txticon}>2</Text>
                        <MaterialCommunityIcons name="bed-king-outline" style={styles.icons} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.txticon}>1</Text>
                        <MaterialCommunityIcons name="shower" style={styles.icons} />
                    </View>
                </View>
            </Animated.View>
        </TouchableOpacity >
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {list()}
            </ScrollView>
            <ScrollView showsVerticalScrollIndicator={false}>
                {list1()}
                <View style={styles.col}>
                    {list2()}
                </View>
                {/* <TouchableOpacity onPress={() => console.log('ok') } >
                    <Animated.View style={active ? { transform: [{ translateY: -2 }] } : null}>
                        <Text style={styles.txticon}>gcgjxgjxjx</Text>
                    </Animated.View>
                </TouchableOpacity> */}

                {/* <Animated.View style={active ? { transform: [{ translateY: -2 }] } : null} >
                    <GestureDetector gesture={hover}>
                        <View style={{ backgroundColor: '#f1f1f1', padding: 5 }}>
                            <Text style={{ fontSize: 35, fontFamily: 'IranSansBold' }}>Continue</Text>
                        </View>
                    </GestureDetector>
                </Animated.View> */}
                {/* <GestureDetector gesture={pan}>
                    <Animated.View style={animatedStyle}>
                        <Text style={{ fontSize: 35, fontFamily: 'IranSansBold' }}>Continue</Text>
                    </Animated.View>
                </GestureDetector> */}
                {/* 
                <Animated.View style={{ backgroundColor: scrollY.value, padding: 20 }}>
                    <GestureDetector gesture={pan}>
                        <Text >Continue</Text>
                    </GestureDetector>
                </Animated.View>

                <Animated.View style={{ transform: [{ translateY: pan2 }] }}
                    {...panResponder.panHandlers}>
                    <View style={styles.box} />
                </Animated.View>


                <View style={styles.transformOriginWrapper}>
                    <Animated.View
                        style={[
                            styles.transformOriginView,
                            {
                                transform: [{ rotate: spin }],
                            },
                        ]}
                    />
                </View> */}

                {/* <GestureHandlerRootView>
                    <PanGestureHandler onGestureEvent={_onPanGestureEvent}>
                        <Animated.View
                            style={{
                                // height: 500,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <Animated.View
                                style={[{ backgroundColor: 'green', borderRadius: 30, height: 100, width: 100 },
                                { transform: [{ translateX: Animated.add(_touchX, new Animated.Value(-50)), }] },]}
                            />
                        </Animated.View>
                    </PanGestureHandler>
                </GestureHandlerRootView> */}

                {/* <Animated.View>
                    <PanGestureHandler
                        ref={panRef}
                        maxPointers={1}
                        onGestureEvent={handleGestureEvent}
                        onHandlerStateChange={handleGestureEvent}>
                        <Animated.View
                            style={{ transform: [{ translateX: translateX }, { translateY: translateY }] }}>
                            <Text >
                                Hello World
                            </Text>
                        </Animated.View>
                    </PanGestureHandler>
                </Animated.View> */}
            </ScrollView>
        </SafeAreaView>
    );
}

export default NewsScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    flipCardBack: {
        position: "absolute",
        top: 0,
    },
    card: {
        paddingBottom: 20,
        marginHorizontal: 5,
    },
    cardImage: {
        height: 190,
        width: width - 20,
        borderRadius: 20,
        alignSelf: "center",
    },
    txtTitle: {
        marginTop: 10,
        fontSize: 12,
        color: '#000',
        fontFamily: 'IranSansBold',
        textAlign: 'right',
        paddingHorizontal: 10
    },
    txtSubTitle: {
        color: '#000',
        fontSize: 12,
        fontFamily: 'IranSans',
        textAlign: 'right',
        paddingHorizontal: 10
    },
    itm: {
        height: 250,
        paddingBottom: 20,
        marginHorizontal: 5,
        marginTop: 40
    },
    cardImg: {
        height: 120,
        width: '100%',
        borderRadius: 15,
        alignSelf: "center",
    },
    txt: {
        marginTop: 15,
        fontSize: 12,
        color: '#000',
        fontFamily: 'IranSansBold',
        textAlign: 'right',
        paddingHorizontal: 10,
    },
    txtSub: {
        color: '#000',
        fontSize: 12,
        fontFamily: 'IranSans',
        textAlign: 'right',
        paddingHorizontal: 10,
    },
    col: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    item: {
        width: '50%',
        paddingBottom: 5,
        paddingHorizontal: 5
    },
    cardImage2: {
        height: 110,
        width: '100%',
        borderRadius: 15,
    },
    txtTitle2: {
        marginTop: 10,
        fontSize: 12,
        color: '#000',
        fontFamily: 'IranSansBold',
        textAlign: 'right',
        paddingHorizontal: 5
    },
    icons: {
        // paddingVertical: 7,
        // paddingHorizontal: 9,
        color: '#222',
        fontSize: 22
    },
    txticon: {
        fontSize: 14,
        fontFamily: 'IranSans',
        textAlign: 'center',
        color: '#000',
        marginRight: 5
    },
    box: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
        borderRadius: 100 / 2,
    },
    transformOriginWrapper: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.5)',
    },
    transformOriginView: {
        backgroundColor: 'pink',
        width: 100,
        height: 100,
        transformOrigin: 'top',
    },
});