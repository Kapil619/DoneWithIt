import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Button, StatusBar, Alert, Platform } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';
// import { useDimensions, useDeviceOrientation } from 'react-native-community/hooks';

export default function App() {
  return (
    <WelcomeScreen />

  );
}

