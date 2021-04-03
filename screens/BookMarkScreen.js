import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const BookMarkScreen = props => {
    return(
        <View>
            <Text>
                BookMarkScreen
            </Text>
        </View>
    )
}

BookMarkScreen.navigationOptions = navData => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({

});

export default BookMarkScreen;

