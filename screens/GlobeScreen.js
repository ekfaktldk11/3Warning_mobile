import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const GlobeScreen = props => {
    return(
        <View>
            <Text>
                GlobeScreen
            </Text>
        </View>
    )
}

GlobeScreen.navigationOptions = navData => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({

});

export default GlobeScreen;

