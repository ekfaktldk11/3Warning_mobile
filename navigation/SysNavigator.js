import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainStack from './navGroups/MainStack';
import MarkStack from './navGroups/MarkStack';

const Tab = createBottomTabNavigator();

const SysNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName='Main'
            >
                <Tab.Screen
                    name='Main'
                    component={MainStack}
                />
                <Tab.Screen
                    name='Mark'
                    component={MarkStack}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default SysNavigator;