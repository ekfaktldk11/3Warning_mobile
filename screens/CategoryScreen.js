import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const CategoryScreen = props => {
    return(
        <View>
            <Text>
                CategoryScreen
            </Text>
        </View>
    )
}

CategoryScreen.navigationOptions = navData => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({

});

export default CategoryScreen;

