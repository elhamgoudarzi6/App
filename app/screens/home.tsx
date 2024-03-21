import React, { useEffect, useState } from 'react';
import { StatusBar, Modal, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, BackHandler, SafeAreaView, useColorScheme } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const { width, height } = Dimensions.get('window');
import TopTabs from '../layouts/topTabs';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import StoryScreen from './story';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = (props: any) => {
  const isDarkMode = useColorScheme() === 'light';

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const [count, setCount] = useState(0);
  const [number, onChangeNumber] = useState('');
  const [text, onChangeText] = useState('');
  const onPress = () => setCount(count + 1);

  const backButtonClick = () => {
    BackHandler.exitApp();
    return true;
  }

  useEffect(() => {
    //BackHandler.addEventListener('hardwareBackPress', backButtonClick);
  });

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? Colors.white : Colors.black }]}>
      <StatusBar hidden={false} translucent={true} networkActivityIndicatorVisible={true}
        backgroundColor={'#777'} barStyle="light-content" />
      <Modal
        animationType="slide"
        onDismiss={() => { setModalVisible(false) }}
        transparent={true}
        visible={modalVisible}
        // presentationStyle='overFullScreen'
        onRequestClose={() => { setModalVisible(false); }}
      >
        <TouchableOpacity activeOpacity={1} style={styles.modalContainer} onPress={() => setModalVisible(false)}>
          <View style={styles.modalView}>
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
              <Feather name='minus' color="#555" size={45} onPress={() => setModalVisible(false)} />
              <Text style={{ fontFamily: 'IranyekanBold', color: '#000', fontSize: 18, marginTop: -18 }}>Create</Text>
            </View>
            <TouchableOpacity style={styles.modalItem} activeOpacity={0.7}>
              <Feather name="film" color="#333" size={22} style={{ marginRight: 15 }} />
              <Text style={styles.textStyle}>Reel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} activeOpacity={0.7}>
              <MaterialIcons name="grid-on" color="#333" size={22} style={{ marginRight: 15 }} />
              <Text style={styles.textStyle}>Post</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} activeOpacity={0.7}>
              <MaterialIcons name="control-point" color="#333" size={22} style={{ marginRight: 15 }} />
              <Text style={styles.textStyle}>Story</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} activeOpacity={0.7}>
              <MaterialIcons name="history" color="#333" size={23} style={{ marginRight: 15 }} />
              <Text style={styles.textStyle}>Highlight</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} activeOpacity={0.7}>
              <MaterialIcons name="live-tv" color="#333" size={22} style={{ marginRight: 15 }} />
              <Text style={styles.textStyle}>Live</Text>
            </TouchableOpacity>
            <View style={{ borderTopWidth: .2, borderColor: '#ccc' }}></View>
          </View>
        </TouchableOpacity>
      </Modal>

      <Modal
        animationType="slide"
        onDismiss={() => { setModalVisible2(false) }}
        transparent={true}
        visible={modalVisible2}
        // presentationStyle='overFullScreen'
        onRequestClose={() => { setModalVisible2(false); }}
      >
        <TouchableOpacity activeOpacity={1} style={styles.modalContainer} onPress={() => setModalVisible2(false)}>
          <View style={styles.modalView}>
            <View style={{ alignItems: 'center' }}>
              <Feather name='minus' color="#555" size={45} onPress={() => setModalVisible2(false)} />
            </View>
            <TouchableOpacity style={styles.modalItem} activeOpacity={0.7}>
              <Feather name="settings" color="#333" size={22} style={{ marginRight: 15 }} />
              <Text style={styles.textStyle}>Setting and Privacy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} activeOpacity={0.7}>
              <Feather name="pie-chart" color="#333" size={22} style={{ marginRight: 15 }} />
              <Text style={styles.textStyle}>Sales Chart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} activeOpacity={0.7}>
              <Feather name="list" color="#333" size={22} style={{ marginRight: 15 }} />
              <Text style={styles.textStyle}>Products List</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} activeOpacity={0.7}>
              <MaterialIcons name="checklist" color="#333" size={22} style={{ marginRight: 15 }} />
              <Text style={styles.textStyle}>Sales List</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} activeOpacity={0.7}>
              <Ionicons name="chatbubbles-outline" color="#000" size={22} style={{ marginRight: 15 }} />
              <Text style={styles.textStyle}>Messages</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} activeOpacity={0.7}>
              <Octicons name="history" color="#333" size={22} style={{ marginRight: 15 }} />
              <Text style={styles.textStyle}>Archive</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} activeOpacity={0.7}>
              <MaterialCommunityIcons name="qrcode-scan" color="#333" size={23} style={{ marginRight: 15 }} />
              <Text style={styles.textStyle}>QR code</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} activeOpacity={0.7}>
              <Feather name="bookmark" color="#333" size={22} style={{ marginRight: 15 }} />
              <Text style={styles.textStyle}>Saved</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} activeOpacity={0.7} onPress={() => props.navigation.navigate('Faq')}>
              <MaterialCommunityIcons name="progress-question" color="#333" size={22} style={{ marginRight: 15 }} />
              <Text style={styles.textStyle}>Faqs</Text>
            </TouchableOpacity>

            <View style={{ borderTopWidth: .2, borderColor: '#ccc' }}></View>
          </View>
        </TouchableOpacity>
      </Modal>
      <View style={styles.head}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.txtHead}>elham_goudarzi_</Text>
          <Entypo name="chevron-small-down" color="#666" size={30} style={{ marginLeft: 2 }} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <FontAwesome name="plus-square-o" color="#333" size={28} onPress={() => setModalVisible(true)} />
          <Octicons name="three-bars" color="#333" size={26} style={{ marginLeft: 25 }} onPress={() => setModalVisible2(true)}/>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, paddingHorizontal: 20 }}>
        <Image style={styles.img} source={require('../../assets/images/elee.jpg')} />
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontFamily: 'IranyekanBold', color: '#222' }}>6</Text>
          <Text style={{ fontFamily: 'IranyekanBold', color: '#222' }}>posts</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontFamily: 'IranyekanBold', color: '#222' }}>406</Text>
          <Text style={{ fontFamily: 'IranyekanBold', color: '#222' }}>follower</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontFamily: 'IranyekanBold', color: '#222' }}>277</Text>
          <Text style={{ fontFamily: 'IranyekanBold', color: '#222' }}>following</Text>
        </View>
      </View>

      <View style={styles.frame}>
        <TouchableOpacity activeOpacity={0.9} style={styles.button} onPress={onPress}>
          <Text style={styles.textStyle}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={styles.button} onPress={onPress}>
          <Text style={styles.textStyle}>Share Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={styles.button} onPress={onPress}>
          <Text style={styles.textStyle}>Contacts</Text>
        </TouchableOpacity>
      </View>
      <StoryScreen />
      <TopTabs />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#fff',
  },
  head: {
    backgroundColor: '#fff',
    borderBottomWidth: .2,
    flexDirection: 'row',
    padding: 10,
    borderColor: '#999',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingHorizontal: 20
  },
  txtHead: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'IranyekanBold',
    marginTop: -5,
    color: '#222'
  },
  input: {
    height: 50,
    marginVertical: 10,
    borderWidth: 0.7,
    padding: 10,
    borderColor: '#999',
    borderRadius: 10
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 60,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: height * .6,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 15,
  },
  modalItem: {
    borderTopWidth: .2,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderColor: '#ccc',
  },
  frame: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    gap: 7,
    padding: 5
  },
  button: {
    elevation: 1,
    borderRadius: 10,
    width: width / 3 - 15,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: '#f1f1f1'
  },
  textStyle: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'IranyekanBold',
    color: '#000'
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'Snapp',
    marginBottom: 20
  },
});

export default HomeScreen;

