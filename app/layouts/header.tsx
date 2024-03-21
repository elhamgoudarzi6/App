import React from 'react';
import { StyleSheet, Text, BackHandler, SafeAreaView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Header = (props: any) => {
    const navigation = useNavigation();
    const goBack = () => {
        if (props.title != 'Home') {
            navigation.goBack()
        }
        BackHandler.exitApp();
    }
    return (
        <SafeAreaView style={styles.container}>
            <AntDesign name="left" color="#777" size={20} style={{ marginRight: 15 }} onPress={goBack} />
            <Text style={styles.title}>{props.title}</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderBottomWidth: .2,
        flexDirection: 'row',
        padding: 10,
        borderColor: '#999',
        alignItems: 'center',
        marginTop: 25
    },
    title: {
        color: '#777',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Iranyekan',
    }
});

export default Header;


