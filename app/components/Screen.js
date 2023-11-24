import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

function Screen({ children, style }) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            {children}
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    }
})
export default Screen;