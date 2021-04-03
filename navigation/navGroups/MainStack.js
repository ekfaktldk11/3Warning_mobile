import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import GlobeScreen from '../../screens/GlobeScreen';
import CategoryScreen from '../../screens/CategoryScreen';

const MainStack = createStackNavigator();

const MainStackScreen = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name='Home'
                component={HomeScreen}
            />
            <MainStack.Screen
                name='Globe'
                component={GlobeScreen}
            />
            <MainStack.Screen
                name='Info'
                component={CategoryScreen}
            />
        </MainStack.Navigator>
    )
};

export default MainStackScreen;