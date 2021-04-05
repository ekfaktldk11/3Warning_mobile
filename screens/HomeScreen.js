import React from 'react';
import {View,Text,StyleSheet, Button} from 'react-native';
import SearchBar from '../components/SearchBar';

const HomeScreen = props => {
    return(
        <View>
            <Text>
                HomeScreen
            </Text>
            <Button
            title='go to Globe'
            onPress={() => 
            props.navigation.navigate('Globe')}
            />
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

