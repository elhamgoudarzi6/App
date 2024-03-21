
import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import ContactScreen from '../screens/contact';
import FaqScreen from '../screens/faq';
import InfoScreen from '../screens/info';
import BottomTabs from './bottomTabs';

const DrawerContent = (props: any) => {
    return (
        <DrawerContentScrollView {...props} nestedScrollEnabled={true}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.title}>دکمه</Text>
                    <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
                </View>
                <View style={{ borderTopWidth: .2, borderColor: '#ccc' }}></View>
                <TouchableOpacity activeOpacity={0.9} onPress={() => { props.navigation.navigate('BottomTabs') }}
                    style={styles.head}>
                    <Text style={styles.label}>صفحه اصلی</Text>
                    <AntDesign name="home" color='#222' size={22} style={{ marginLeft: 15, textAlign: "right", }} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} onPress={() => { props.navigation.navigate('Faq') }}
                    style={styles.head}>
                    <Text style={styles.label}>سوالات متداول</Text>
                    <MaterialCommunityIcons name="progress-question" color='#222' size={23} style={{ marginLeft: 15, textAlign: "right", }} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} onPress={() => { props.navigation.navigate('Contact') }}
                    style={styles.head}>
                    <Text style={styles.label}>ارتباط با ما</Text>
                    <Feather name="phone-call" color='#222' size={22} style={{ marginLeft: 15, textAlign: "right", }} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} onPress={() => { props.navigation.navigate('Info') }}
                    style={styles.head}>
                    <Text style={styles.label}> درباره ما</Text>
                    <Feather name="info" color='#222' size={22} style={{ marginLeft: 15, textAlign: "right", }} />
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="BottomTabs" drawerContent={(props) => <DrawerContent {...props} />}
            screenOptions={{
                drawerPosition: 'right',
                drawerStyle: { width: useWindowDimensions().width * 0.55 },
            }}>
            <Drawer.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
            <Drawer.Screen name="Faq" component={FaqScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="Contact" component={ContactScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="Info" component={InfoScreen} options={{ headerShown: false }} />
        </Drawer.Navigator>
    );
}

export default MyDrawer;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 15,
        paddingHorizontal: 5
    },
    head: {
        borderBottomWidth: .2,
        borderColor: '#ccc',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'flex-end',
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 15,
        marginBottom: 20
    },
    logo: {
        width: 18,
        height: 18,
        marginLeft: 5
    },
    title: {
        fontSize: 18,
        fontFamily: 'Snapp',
        color: "#111",
    },
    label: {
        fontSize: 13,
        textAlign: 'right',
        fontFamily: 'Iranyekan',
        color: "#000",
    },
});