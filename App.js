import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Button, StatusBar, Alert, Platform } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';

// import { useDimensions, useDeviceOrientation } from 'react-native-community/hooks';

export default function App() {
  return (
    <View style={{
      backgroundColor: '#f8f4f4',
      padding: 20,
      paddingTop: 100,
    }}>
      <Card
        title="Red jacket for sale"
        subtitle="$100"
        image={require("./app/assets/logo-red.png")} />

    </View>

  );
}

