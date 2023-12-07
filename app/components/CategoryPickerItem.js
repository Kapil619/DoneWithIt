import React from 'react';
import { View } from 'react-native';
import Icon from './icon';
import AppText from './AppText';
import { StyleSheet } from 'react-native';



function CategoryPickerItem({ item, onPress }) {
    return <View style={styles.container}  >
        <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
        <AppText style={styles.label} >{item.label}</AppText>
    </View>
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: 'center',
        width: '33%'


    },
    label: {
        marginTop: 5,
        textAlign: 'center'
    }
})

export default CategoryPickerItem;