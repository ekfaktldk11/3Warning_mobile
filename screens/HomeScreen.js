import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const HomeScreen = props => {
    return(
        <View>
            <Text>
                HomeScreen
            </Text>
        </View>
    )
}

HomeScreen.navigationOptions = navData => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({

});

export default HomeScreen;

