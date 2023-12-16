import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Button, StatusBar, Alert, Platform } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/icon';
import ListItem from './app/components/lists/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import { useEffect, useState } from 'react';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ImageInput from './app/components/ImageInput';
// import { useDimensions, useDeviceOrientation } from 'react-native-community/hooks';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import ImageInputList from './app/components/ImageInputList';
import AuthNavigator from './app/navigation/AuthNavigator';
import NavigationContainer from '@react-navigation/native/src/NavigationContainer';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Technology', value: 3 },
]
export default function App() {

  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>

  );
}

