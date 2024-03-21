import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, SafeAreaView, SectionList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ContactScreen = (props: any) => {
    const [number, onChangeNumber] = useState('');
    const [mobile, onChangeMobile] = useState('');
    const [text, onChangeText] = useState('');
    const onPress = () => { };
    const DATA = [
        {
            title: 'راه های ارتباطی',
            data: [
                { title: '09168509001', icon: 'phone-call' },
                { title: 'doukme.ir', icon: 'instagram' },
                { title: 'doukme.ir', icon: 'send' },
                { title: 'doukme.ir', icon: 'youtube' },
                { title: 'doukme.ir', icon: 'chrome' },
                { title: 'دانشگاه لرستان پارک علم و فناوری', icon: 'map-pin' },
            ],
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.text}>send message for doukme</Text>
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
                    placeholder="title"
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <TextInput
                    placeholder="message"
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={onPress}>
                    <Text style={styles.txtbtn}>send</Text>
                </TouchableOpacity>
            </ScrollView>
            <SectionList
                style={{ marginTop: 30 }}
                sections={DATA}
                // keyExtractor={(item, index) => item }
                renderItem={({ item, index }) => (
                    <View style={styles.sec}>
                        <Feather name={item.icon} size={22} color='#222' />
                        <Text style={styles.txtItem}>{item.title}</Text>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.secHead}>{title}</Text>
                )}
            />
            {/* <AntDesign name='enviromento' size={28} color='#999' /> */}
            {/* <View style={styles.icons}>
                    <Feather name='chrome' size={30} color='#555' />
                    <Feather name='instagram' size={30} color='#555' />
                    <Feather name='send' size={30} color='#555' />
                    <FontAwesome name='whatsapp' size={30} color='#555' />
                    <Feather name='phone-call' size={30} color='#555' />
                </View> */}

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15
    },
    text: {
        color: '#777',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Iranyekan',
        marginTop: 35,
        marginBottom: 10
    },
    adrress: {
        color: '#555',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'IranyekanLight',
        marginLeft: 5
    },
    sec: {
        borderTopWidth: .2,
        borderColor: '#ccc',
        alignItems: 'center',
        paddingTop: 6,
        marginVertical: 5,
        flexDirection: 'row'
    },
    secHead: {
        color: '#222',
        fontSize: 16,
        fontFamily: 'IranyekanBold',
        marginBottom:10
    },
    txtItem: {
        color: '#222',
        fontSize: 16,
        fontFamily: 'Iranyekan',
        marginLeft: 10
    },
    input: {
        height: 50,
        marginVertical: 8,
        borderWidth: .7,
        padding: 10,
        borderColor: '#999',
        borderRadius: 10,
        fontFamily: 'IranSans',
    },
    button: {
        borderRadius: 10,
        padding: 8,
        elevation: 2 ,
        marginTop:15,
        backgroundColor: '#b72039',
    },
    txtbtn: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'IranyekanBold',
        textAlign: 'center'
    },
    icons: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f4f4f4',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 25,
        marginVertical: 20
    }
});

export default ContactScreen;


