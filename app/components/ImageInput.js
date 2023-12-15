import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

function ImageInput({ imageUri, onChangeImage }) {

    useEffect(() => {
        requestPermission();

    }, []);


    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (!granted)
            alert('You need to enable permission to access the library');
    }

    const handlePress = () => {
        if (!imageUri) selectImage();
        else Alert.alert('Delete', 'Are you sure you want to delete this image?', [
            {
                text: 'Yes',
                onPress: () => onChangeImage(null)
            },
            { text: 'No' }
        ])
    }

    const selectImage = async () => {

        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            });
            if (!result.canceled)
                onChangeImage(result.uri);

        } catch (error) {
            console.log('error reading ')
        }

    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && <MaterialCommunityIcons name='camera' size={40} color={colors.medium} />}
                {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        overflow: 'hidden',
    },
    image: {
        height: '100%',
        width: '100%'
    }
})

export default ImageInput;