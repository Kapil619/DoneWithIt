import { Formik } from 'formik';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import ErrorMessage from '../components/ErrorMessage';
import Screen from '../components/Screen';



const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
});
function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <Image source={require('../assets/logo-red.png')} style={styles.logo} />
            <Formik validationSchema={validationSchema} initialValues={{ email: '', password: '' }} onSubmit={values => console.log(values)} >
                {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <>
                        <AppTextInput placeholder="Email" autoCapitalize="none" keyboardType="email-address"
                            onChangeText={handleChange('email')}
                            textContentType='emailAddress' icon="email"
                            onBlur={() => setFieldTouched('email')}
                        />
                        <ErrorMessage error={errors.email} visible={touched.email} />


                        <AppTextInput onChangeText={handleChange('password')} placeholder="Password" onBlur={() => setFieldTouched('password')} autoCapitalize="none" autoCorrect={false} icon="lock" secureTextEntry textContentType='password' />
                        <ErrorMessage error={errors.password} visible={touched.password} />
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