import React from 'react';
import { Text } from 'react-native';

function AppText({ children }) {
    return (
        <Text style={StyleSheet.text}></Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    }
})

export default AppText;