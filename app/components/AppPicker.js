import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';


function AppTextInput({ icon, placeholder, ...otherProps }) {
    const [modalVisible, setmodalVisible] = useState(false)

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setmodalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
                    <AppText style={styles.text}> {placeholder} </AppText>
                    <MaterialCommunityIcons
                        name='chevron-down'
                        size={20}
                        color={defaultStyles.colors.black} />

                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide' >
                <Screen>
                    <Button title='Close' onPress={() => setmodalVisible(false)} />

                </Screen>
            </Modal>
        </>


    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1,
    }
})

export default AppTextInput;