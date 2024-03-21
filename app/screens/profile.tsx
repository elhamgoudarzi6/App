import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Dimensions, Share, Alert, Clipboard, SafeAreaView } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../../react-native.config';
import Octicons from 'react-native-vector-icons/Octicons';
//import { launchImageLibrary } from 'react-native-image-picker';

const { width, height } = Dimensions.get('window');

const ProfileScreen = () => {

    const [isEditShow, setIsEditShow] = useState(false);
    const [isMobileShow, setIsMobileShow] = useState(false);
    const [isWalletShow, setIsWalletShow] = useState(false);
    const [isShareShow, setIsShareShow] = useState(false);
    const [isSettingShow, setIsSettingShow] = useState(false);
    const [isGiftShow, setIsGiftShow] = useState(false);
    const [isTransactionShow, setIsTransactionShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [number, onChangeNumber] = useState('');
    const [mobile, onChangeMobile] = useState('');
    const [text, onChangeText] = useState('');

    const onPress = () => { };

    const editShow = () => {
        return (
            <View style={styles.item}>
                <TextInput
                    placeholder="fullname"
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <TextInput
                    placeholder="email"
                    keyboardType="email-address"
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <TextInput
                    placeholder="birthdate"
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={onPress}>
                    <Text style={styles.txtbtn}>edit</Text>
                </TouchableOpacity>
            </View>
        )
    };

    const mobileShow = () => {
        return (
            <View style={styles.item}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeMobile}
                    value={mobile}
                    placeholder="mobile"
                    keyboardType="numeric"
                    maxLength={11}
                />
                <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={onPress}>
                    <Text style={styles.txtbtn}>edit</Text>
                </TouchableOpacity>
            </View>
        )
    };

    const transactionShow = () => {
        return (
            <View style={styles.item}>
                <Octicons name="unverified" color="#555" size={30} style={{ alignSelf: 'center' }} />
                <Text style={styles.txtShare}>
                    Share the solution by inviting friends and both you will get
                </Text>
            </View>
        )
    };
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'Doukme App Share Code : 765GHLB',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error: any) {
            Alert.alert(error.message);
        }
    };

    const shareShow = () => {
        return (
            <View style={styles.item}>
                <Feather name="share" color="#777" size={42} onPress={onShare} style={{ alignSelf: 'center' }} />
                <Text style={styles.txtShare}>
                    Share the solution by inviting friends and both you will get </Text>
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center', backgroundColor: '#f4f4f4', borderRadius: 5, marginHorizontal: 30, paddingVertical: 10, marginTop: 20 }}>
                    <Feather name='copy' color='#999' size={25} style={{ marginRight: 10 }} onPress={() => Clipboard.setString('765GHLB')} />
                    <Text style={{ fontSize: 20 }}>765GHLB</Text>
                </View>
            </View>
        )
    };

    const giftShow = () => {
        return (
            <View style={styles.item}>

                {/* <SimpleLineIcons name="envelope-letter" color="#999" size={55} onPress={onShare} style={{ alignSelf: 'center' }} /> */}
                <AntDesign name="gift" color="#999" size={55} onPress={onShare} style={{ alignSelf: 'center' }} />
                <Text style={styles.txtShare}>
                    Share the solution by inviting friends and both you will get </Text>
            </View>
        )
    };

    useEffect(() => {
    });

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={false} translucent={true} networkActivityIndicatorVisible={true}
                backgroundColor={'#777'} barStyle="light-content" />

            <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.profile}>
                <AntDesign name="user" color="#999" size={50} />
            </TouchableOpacity>

            <View style={{ borderBottomWidth: .2, borderColor: '#ccc' }}></View>
            <TouchableOpacity style={styles.head} activeOpacity={0.8} onPress={() => setIsEditShow(!isEditShow)}>
                <AntDesign name={isEditShow ? "down" : "right"} color="#777" size={14} style={{ marginRight: 15 }} />
                <AntDesign name="user" color="#555" size={22} />
                <Text style={styles.text} >edit</Text>
            </TouchableOpacity>
            {isEditShow ? editShow() : null}

            <TouchableOpacity style={styles.head} activeOpacity={0.8} onPress={() => setIsWalletShow(!isWalletShow)}>
                <AntDesign name={isWalletShow ? "down" : "right"} color="#777" size={14} style={{ marginRight: 15 }} />
                <AntDesign name="wallet" color="#555" size={22} />
                <Text style={styles.text}>wallet</Text>
            </TouchableOpacity>
            {isWalletShow ? <View style={styles.item}><Text>okkkkkkkk</Text></View> : null}

            <TouchableOpacity style={styles.head} activeOpacity={0.8} onPress={() => setIsMobileShow(!isMobileShow)}>
                <AntDesign name={isMobileShow ? "down" : "right"} color="#777" size={14} style={{ marginRight: 15 }} />
                <Octicons name="key" color="#555" size={21} />
                <Text style={styles.text}>change mobile</Text>
            </TouchableOpacity>
            {isMobileShow ? mobileShow() : null}

            <TouchableOpacity style={styles.head} activeOpacity={0.8} onPress={() => setIsTransactionShow(!isTransactionShow)}>
                <AntDesign name={isTransactionShow ? "down" : "right"} color="#777" size={14} style={{ marginRight: 15 }} />
                <Octicons name="verified" color="#555" size={22} />
                <Text style={styles.text}>verify</Text>
            </TouchableOpacity>
            {isTransactionShow ? transactionShow() : null}

            <TouchableOpacity style={styles.head} activeOpacity={0.8} onPress={() => setIsShareShow(!isShareShow)}>
                <AntDesign name={isShareShow ? "down" : "right"} color="#777" size={14} style={{ marginRight: 15 }} />
                <Feather name="share" color="#555" size={22} />
                <Text style={styles.text}>share</Text>
            </TouchableOpacity>
            {isShareShow ? shareShow() : null}

            <TouchableOpacity style={styles.head} activeOpacity={0.8} onPress={() => setIsGiftShow(!isGiftShow)}>
                <AntDesign name={isGiftShow ? "down" : "right"} color="#777" size={14} style={{ marginRight: 15 }} />
                <AntDesign name="gift" color="#555" size={22} />
                <Text style={styles.text}>gift</Text>
            </TouchableOpacity>
            {isGiftShow ? giftShow() : null}

            <TouchableOpacity style={styles.head} activeOpacity={0.8} onPress={() => setIsSettingShow(!isSettingShow)}>
                <AntDesign name={isSettingShow ? "down" : "right"} color="#777" size={14} style={{ marginRight: 15 }} />
                <AntDesign name="setting" color="#555" size={22} />
                <Text style={styles.text}>setting</Text>
            </TouchableOpacity>
            {isSettingShow ? <View style={styles.item}><Text>okkkkkkkk</Text></View> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 5
    },
    profile: {
        backgroundColor: '#f8f8f8',
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: height * 0.09,
        borderRadius: 60,
        padding: 20
    },
    text: {
        color: '#222',
        fontSize: 16,
        fontFamily: 'Iranyekan',
        marginLeft: 5,
    },
    head: {
        borderBottomWidth: .2,
        flexDirection: 'row',
        padding: 10,
        borderColor: '#ccc',
        alignItems: 'center',
    },
    item: {
        paddingVertical: 35,
        paddingHorizontal: 15,
        borderBottomWidth: .2,
        borderColor: '#ccc'
    },
    input: {
        height: 50,
        marginVertical: 10,
        borderWidth: .7,
        padding: 10,
        borderColor: '#999',
        borderRadius: 10,
        fontFamily: 'IranSans',
    },
    button: {
        borderRadius: 10,
        padding: 8,
        elevation: 2,
        marginTop: 15,
        backgroundColor: colors.color1,
    },
    txtbtn: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'IranyekanBold',
        textAlign: 'center'
    },
    txtShare: {
        fontSize: 20,
        fontFamily: 'Caviar',
        textAlign: 'center',
        marginTop: 20,
    }
});

export default ProfileScreen;



