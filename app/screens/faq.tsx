import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FaqScreen = () => {

    const [isShow, setIsShow] = useState({ show: false, id: -1 });

    const data = [
        { id: 0, question: 'سوال 1', reply: 'جواب ' },
        { id: 1, question: 'سوال 2', reply: 'جواب ' },
        { id: 2, question: 'سوال 3', reply: 'جواب ' },
        { id: 3, question: 'سوال 4', reply: 'جواب ' },

    ];

    // const getFaqs = async () => {
    //     try {
    //         const response = await fetch('https://api.drjaferi.ir/user/getFaqs');
    //         const json = await response.json();
    //         const data = json.data;
    //         console.log(json.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    useEffect(() => {
    });

    const onPress = (i: any) => {
        console.log('isShow:', isShow)
         setIsShow({ ...isShow, show: !isShow.show, id: i });
      //  setIsShow((prev) => ({ ...isShow, show: !prev.show, id: i }));
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={data} style={{ marginTop: 30, paddingHorizontal: 5 }} renderItem={({ item, index }) =>
                <View>
                    <TouchableOpacity style={styles.head} activeOpacity={0.9} onPress={() => onPress(item.id)}>
                        <AntDesign name={(item.id == isShow.id && isShow.show) ? "questioncircle" : "questioncircleo"} color="#222" size={20} style={{ marginRight: 5 }} />
                        <Text style={styles.textHead}>{item.question}</Text>
                    </TouchableOpacity>
                    {(item.id == isShow.id && isShow.show) ? <View style={styles.item}><Text style={styles.textItem}>{item.reply}</Text></View> : null}
                </View>
            } />
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 5
    },
    head: {
        // backgroundColor: '#fff',
        // elevation: 2,
        // marginVertical: 5,
        borderBottomWidth: .3,
        borderColor: '#ccc',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,

    },
    textHead: {
        color: '#222',
        fontSize: 14,
        fontFamily: 'IranyekanBold',
        marginLeft: 5,
    },
    item: {
        // backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderBottomWidth: .3,
        borderColor: '#ccc',
    },
    textItem: {
        color: '#222',
        fontSize: 12,
        fontFamily: 'Iranyekan',
        marginLeft: 5,
    },
});

export default FaqScreen;

