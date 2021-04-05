import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import BookMarkScreen from '../../screens/BookMarkScreen';

const Tab = createBottomTabNavigator();

const MainTab = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: colors.primary
            }}
        >
            <Tab.Screen
                options={{
                    tabBarLabel: '홈'
                }}
                
                name='Home'
                component={HomeScreen}
            />
            <Tab.Screen
                options={{
                    tabBarLabel:'즐겨찾기'
                }}
                name='BookMark'
                component={BookMarkScreen}
            />
        </Tab.Navigator>
    )
};

export default MainTab;

// const MainStack = createStackNavigator();

// const MainStackScreen = () => {
//     return (
//         <MainStack.Navigator>
//             <MainStack.Screen
//                 name='Home'
//                 component={HomeScreen}
//             />
//             <MainStack.Screen
//                 name='Globe'
//                 component={GlobeScreen}
//             />
//             <MainStack.Screen
//                 name='Info'
//                 component={CategoryScreen}
//             />
//         </MainStack.Navigator>
//     )
// };

// export default MainStackScreen;