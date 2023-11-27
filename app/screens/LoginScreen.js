import { Formik } from 'formik';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <Image source={require('../assets/logo-red.png')} style={styles.logo} />
            <Formik initialValues={{ email: '', password: '' }} onSubmit={values => console.log(values)} >
                {({ handleChange, handleSubmit }) => (
                    <>
                        <AppTextInput placeholder="Email" autoCapitalize="none" keyboardType="email-address"
                            onChangeText={handleChange('email')}
                            textContentType='emailAddress' icon="email" />
                        <AppTextInput onChangeText={handleChange('password')} placeholder="Password" autoCapitalize="none" autoCorrect={false} icon="lock" secureTextEntry textContentType='password' />
                        <AppButton title="Login" onPress={handleSubmit} />
                    </>
                )}
            </Formik>
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