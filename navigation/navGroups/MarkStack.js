import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BookMarkScreen from '../../screens/BookMarkScreen';
import CategoryScreen from '../../screens/CategoryScreen';

const MarkStack = createStackNavigator();

const MarkStackScreen = () => {
    return (
        <MarkStack.Navigator>
            <MarkStack.Screen
                name='Booked'
                component={BookMarkScreen}
            />
            <MarkStack.Screen
                name='Info'
                component={CategoryScreen}
            />
        </MarkStack.Navigator>
    )
}

export default MarkStackScreen;