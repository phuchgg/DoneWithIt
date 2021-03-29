import React from 'react';
import { Image, StyleSheet } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import {Formik} from 'formik';
import AppText from '../components/AppText'
import * as yup from 'yup';
import ErrorMessage from '../components/ErrorMessage';

const validationSchema = yup.object().shape({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <Formik
                initialValues={{email:"",password:""}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
            <>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo-red.png')}
                />
                <AppTextInput
                    autoCapitalize="none"
                    autoCorrect="false"
                    icon="email"
                    placeholder="Email"
                    onChangeText={handleChange("email")}
                    onBlur={() => setFieldTouched("email")}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />
                <ErrorMessage error={errors.email} visible={touched.email}/>
                <AppTextInput
                    autoCapitalize="none"
                    autoCorrect="false"
                    icon="lock"
                    placeholder="Password"
                    onChangeText={handleChange("password")}
                    textContentType="password"
                    secureTextEntry="true"
                    onBlur={() =>setFieldTouched("password")}
                />
                <ErrorMessage error={errors.password} visible={touched.password}/>
                <AppButton title="Login" onPress={handleSubmit}/>
            </>
                )}
            </Formik>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
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