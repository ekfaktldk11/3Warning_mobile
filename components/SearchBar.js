import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const SearchBar = props => {
    return (
        <View style={styles.screen}>
            <TextInput
            style={styles.input}
            placeholder='touch here'
            ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
    },
    input:{
        paddingHorizontal: 2,
        paddingVertical : 5
    }
});

export default SearchBar;