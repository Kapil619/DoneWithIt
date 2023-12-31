import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({ icon, items, placeholder, selectedItem, onSelectItem, PickerItemComponent = PickerItem, numberOfColumns = 1,
    width = '100%' }) {
    const [modalVisible, setmodalVisible] = useState(false)

    return (
        <>

            <TouchableWithoutFeedback onPress={() => setmodalVisible(true)}>
                <View style={[styles.container, { width }]}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
                    {selectedItem ? <AppText style={styles.text}>{selectedItem.label} </AppText> : <AppText style={styles.placeholder}> {placeholder} </AppText>}


                    <MaterialCommunityIcons
                        name='chevron-down'
                        size={20}
                        color={defaultStyles.colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide' >
                <Screen>
                    <Button title='Close' onPress={() => setmodalVisible(false)} />
                    <FlatList data={items}
                        keyExtractor={item => item.value.toString()}
                        numColumns={numberOfColumns}
                        renderItem={({ item }) => <PickerItemComponent label={item.label}
                            item={item}




                            onPress={() => {
                                setmodalVisible(false);
                                onSelectItem(item);
                            }} />
                        } />
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
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1,
    },
    placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1
    }
})
export default AppPicker;