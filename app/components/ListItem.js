import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';


function ListItem({ title, subtitle, image, ImageComponent, onPress, renderRightActions }) {
    return (
        <GestureHandlerRootView>

            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
                    <View style={styles.container}>
                        {ImageComponent}
                        {image && <Image source={image} style={styles.image} />}
                        <View style={styles.detailsContainer}>
                            <AppText style={styles.title}>{title}</AppText>
                            {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
                        </View>
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: '700',
    },
    subtitle: {
        color: colors.medium,
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center',
    }
})
export default ListItem;