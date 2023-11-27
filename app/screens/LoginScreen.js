import { Formik } from 'formik';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import * as Yup from 'yup';
import AppText from '../components/AppText';



const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
});
function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <Image source={require('../assets/logo-red.png')} style={styles.logo} />
            <Formik validationSchema={validationSchema} initialValues={{ email: '', password: '' }} onSubmit={values => console.log(values)} >
                {({ handleChange, handleSubmit, errors }) => (
                    <>
                        <AppTextInput placeholder="Email" autoCapitalize="none" keyboardType="email-address"
                            onChangeText={handleChange('email')}
                            textContentType='emailAddress' icon="email" />
                        <AppText style={{ color: 'red' }} > {errors.email} </AppText>
                        <AppTextInput onChangeText={handleChange('password')} placeholder="Password" autoCapitalize="none" autoCorrect={false} icon="lock" secureTextEntry textContentType='password' />
                        <AppText style={{ color: 'red' }} > {errors.password} </AppText>

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