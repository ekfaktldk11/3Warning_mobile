import React from 'react';
import {View,Text,StyleSheet, Button} from 'react-native';

const GlobeScreen = props => {
    return(
        <View>
            <Text>
                GlobeScreen
            </Text>
            <Button
            title='go to Info'
            onPress={() => 
            props.navigation.navigate('Info')}
            />
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

