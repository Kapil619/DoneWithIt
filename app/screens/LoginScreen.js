import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import Screen from '../components/Screen';
import { AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/forms'



const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
});
function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <Image source={require('../assets/logo-red.png')} style={styles.logo} />
            <AppForm validationSchema={validationSchema} initialValues={{ email: '', password: '' }} onSubmit={values => console.log(values)} >
                <AppFormField placeholder="Email" autoCapitalize="none" keyboardType="email-address"
                    textContentType='emailAddress' icon="email" name={'email'}
                />
                <AppFormField placeholder="Password" name={'password'} autoCapitalize="none" autoCorrect={false} icon="lock" secureTextEntry textContentType='password' />
                <SubmitButton title="Login" />
            </AppForm>
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