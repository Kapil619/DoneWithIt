import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Button, StatusBar, Alert, Platform } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import { useState } from 'react';
// import { useDimensions, useDeviceOrientation } from 'react-native-community/hooks';



const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Technology', value: 3 },
]
export default function App() {
  const [category, setcategory] = useState(categories[0])
  return (

    <Screen>
      <AppPicker selectedItem={category} onSelectItem={item => setcategory(item)} items={categories} icon={'apps'} placeholder={'Category'} />
      <AppTextInput icon={'email'} placeholder="Email" />
    </Screen>
  );
}

