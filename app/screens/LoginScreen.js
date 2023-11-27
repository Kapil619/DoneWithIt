import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
function LoginScreen(props) {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();

    return (
        <Screen style={styles.container}>
            <Image source={require('../assets/logo-red.png')} style={styles.logo} />
            <AppTextInput placeholder="Email" autoCapitalize="none" keyboardType="email-address"
                onChangeText={text => setemail(text)}
                textContentType='emailAddress' icon="email" />
            <AppTextInput onChangeText={text => setpassword(text)} placeholder="Password" autoCapitalize="none" autoCorrect={false} icon="lock" secureTextEntry textContentType='password' />
            <AppButton title="Login" onPress={() => console.log(email, password)} />
        </Screen>
    );
}

const styles = StyleSheet.create({

    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    }
})
export default LoginScreen;