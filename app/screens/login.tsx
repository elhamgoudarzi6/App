import React, { useEffect, useState } from 'react';
import { StatusBar, Modal, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView, TextInput, ActivityIndicator, SafeAreaView, Animated } from 'react-native';
const { width, height } = Dimensions.get('window');

const LoginScreen = (props: any) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [number, setNumber] = useState('');
    const [text, onChangeText] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const position = new Animated.Value(isFocused ? 1 : 0);
    const onChangeNumber = (data: any) => {
        setNumber(data)
        setIsFocused(true)
    }
    useEffect(() => {

    });

    const labelStyle = () => {
        return {

            top: !isFocused ? 35 : 8,
            fontSize: !isFocused ? 14 : 14,
            color: !isFocused ? '#ccc' : '#777',
            backgroundColor: isFocused ? '#fff' : 'transparent',
            paddingHorizontal: isFocused ? 10 : 0,
            paddingVertical: isFocused ? 5 : 0
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={false} translucent={true} networkActivityIndicatorVisible={true}
                backgroundColor={'#777'} barStyle="light-content" />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(!modalVisible); }}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.textStyle}>Hello World!</Text>
                        <TouchableOpacity activeOpacity={.9}
                            style={styles.button}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <ScrollView style={styles.scrollView}>
                <Image style={styles.img} source={require('../../assets/images/logo.png')} />
                <Text style={styles.title}>دکمه</Text>

                <View style={{ paddingTop: 20 }}>
                    <TextInput
                        keyboardType="numeric"
                        style={styles.input}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => number == '' ? setIsFocused(false) :null}
                        maxLength={11}
                        onChangeText={(x) => onChangeNumber(x)}
                        value={number}
                    />
                    <Text style={[styles.labelStyle, labelStyle()]}> موبایل</Text>
                </View>
                <TextInput
                    placeholder="fullname"
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <TouchableOpacity activeOpacity={0.7} style={styles.button}
                    onPress={() => props.navigation.navigate('Home')}>
                    <Text style={styles.textStyle}>login</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    scrollView: {
        padding: 30,
    },
    labelStyle: {
        position: 'absolute',
        right: 25,
        fontFamily: 'IranyekanBold',
    },
    input: {
        height: 50,
        marginVertical: 10,
        borderWidth: 0.7,
        paddingHorizontal: 5,
        borderColor: '#bbb',
        borderRadius: 10
    },
    img: {
        width: 60,
        height: 60,
        alignSelf: 'center',
        marginTop: 90
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        margin: 20
    },
    modalView: {
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.7,
        shadowRadius: 20,
        elevation: 5,
    },
    button: {
        borderRadius: 10,
        padding: 8,
        elevation: 2,
        marginTop: 15,
        backgroundColor: '#b72039',
    },
    textStyle: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'IranyekanBold',
        color: '#fff'
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'Snapp',
        marginBottom: 20,
        marginTop: -15
    },
});

export default LoginScreen;

