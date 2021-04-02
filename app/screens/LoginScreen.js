import React from 'react';
import { Image, StyleSheet } from 'react-native';
import AppTextInput from '../components/TextInput';
import Screen from '../components/Screen';
import AppButton from '../components/Button';
import {Formik} from 'formik';
import AppText from '../components/Text'
import * as yup from 'yup';
import ErrorMessage from '../components/forms/ErrorMessage';
import {Form, AppFormField, SubmitButton} from '../components/forms'

const validationSchema = yup.object().shape({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <Form
                initialValues={{email:"",password:""}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <Image
                    style={styles.logo}
                    source={require('../assets/logo-red.png')}
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect="false"
                    icon="email"
                    placeholder="Email"
                    name="email"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect="false"
                    icon="lock"
                    placeholder="Password"
                    name="password"
                    textContentType="password"
                    secureTextEntry
                />
                <SubmitButton title="Login"/>
            </Form>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        
    },
    logo:{
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 50
    }
})
export default LoginScreen;