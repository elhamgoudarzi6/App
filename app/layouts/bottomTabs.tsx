import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import ProductsScreen from '../screens/products';
import CartScreen from '../screens/cart';

import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FavoriteScreen from '../screens/favorite';
import NewsScreen from '../screens/news';

const Tab = createBottomTabNavigator();

//sharealt storefront
//<Ionicons name="storefront-outline" color="#333" size={24} />

const BottomTabs = () => {
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarLabelStyle: { fontFamily: 'Iranyekan' },
                    tabBarLabel: 'خانه',
                    tabBarActiveTintColor: '#000',
                    tabBarInactiveTintColor: '#777',
                    tabBarIcon: ({ color }) => <AntDesign name="home" color={color} size={22} />,
                }} />
            <Tab.Screen name="Favorite" component={FavoriteScreen}
                options={{
                    headerShown: false,
                    tabBarLabelStyle: { fontFamily: 'Iranyekan' },
                    tabBarLabel: 'تراکنش',
                    tabBarActiveTintColor: '#000',
                    tabBarInactiveTintColor: '#777',
                    tabBarIcon: ({ color }) => <Feather name="heart" color={color} size={22} />,
                }} />
            <Tab.Screen name="Products" component={ProductsScreen}
                options={{
                    headerShown: false,
                    tabBarLabelStyle: { fontFamily: 'Iranyekan' },
                    tabBarLabel: 'افزودن',
                    tabBarActiveTintColor: '#000',
                    tabBarInactiveTintColor: '#777',
                    tabBarIcon: ({ color }) => <SimpleLineIcons name="plus" color={color} size={26} />,
                }} />
            <Tab.Screen name="Cart" component={NewsScreen}
                options={{
                    headerShown: false,
                    tabBarLabelStyle: { fontFamily: 'Iranyekan' },
                    tabBarLabel: 'سبد خرید',
                    tabBarActiveTintColor: '#000',
                    tabBarInactiveTintColor: '#777',
                    tabBarIcon: ({ color }) => <Feather name="shopping-bag" color={color} size={22} />,
                }} />
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarLabelStyle: { fontFamily: 'Iranyekan' },
                    tabBarLabel: 'حساب کاربری',
                    tabBarActiveTintColor: '#000',
                    tabBarInactiveTintColor: '#777',
                    tabBarIcon: ({ color }) => <Feather name="user" color={color} size={22} />,
                }} />
        </Tab.Navigator>
    );
}

export default BottomTabs;