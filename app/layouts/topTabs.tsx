import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PostScreen from '../screens/posts';
import ReelScreen from '../screens/reels';
import TagScreen from '../screens/tags';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
    return (
        <Tab.Navigator initialRouteName='post'>
            <Tab.Screen name="fff" component={PostScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarPressColor: 'transparent',
                    tabBarStyle: {},
                    tabBarIcon: () => <Ionicons name="images-outline" color="#333" size={20} />,
                    tabBarIndicatorStyle: { backgroundColor: '#333', height: 1.5, },
                }} />

            <Tab.Screen name="Reel" component={ReelScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarPressColor: 'transparent',
                    tabBarStyle: {},
                    tabBarIcon: () => <SimpleLineIcons name="social-youtube" color="#333" size={20} />,
                    tabBarIndicatorStyle: { backgroundColor: '#333', height: 1.5, },
                }} />
            <Tab.Screen name="Tag" component={TagScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarPressColor: 'transparent',
                    tabBarStyle: {},
                    tabBarIcon: () => <EvilIcons name="user" color="#333" size={28} />,
                    tabBarIndicatorStyle: { backgroundColor: '#333', height: 1.5, },
                }} />
        </Tab.Navigator>
    );
}
export default TopTabs;