import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import firebase from '../Firebaseapp/firebase'
import { db } from '../Firebaseapp/firebase';
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'


const SignUpForm = ({ Navigation = useNavigation() }) => {
    const SignUpFormSchema = Yup.object().shape({

        email: Yup.string().email().required('An email is required'),
        username: Yup.string().required().min(6, 'A username is required'),
        password: Yup.string().required().min(8, 'Your Password has to have at least 8 Charaters')
    })

   

    const onSignUp = async (email, password, username) => {
        try {
            const authUser = await firebase.auth().createUserWithEmailAndPassword(email, password)
            console.log("Firebase user created ", email, password)

            db.collection('users').add({
                owner_uid: authUser.user.uid,
                username: username,
                email: authUser.user.email,
               
            })
        } catch (error) {
            Alert.alert(error.message)
        }

    }

    return (
        <View style={styles.wrapper}>

            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => {
                    onSignUp(values.email, values.password, values.username)
                }}
                validationSchema={SignUpFormSchema}
                validateonMount={true}
            >
                {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (

                    <>


                        <View style={[
                            styles.inputField,
                            {
                                borderColor: values.email.length < 1 || Validator.validate(values.email) ? 'black' : 'red'

                            }]} >
                            <TextInput
                                placeholder='Email Address '
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                autoFocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />

                        </View>

                        <View style={[
                            styles.inputField,
                            {
                            }]} >
                            <TextInput
                                placeholder='Username '
                                autoCapitalize='none'
                                textContentType='username'
                                autoFocus={true}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />
                        </View>
                        <View style={[styles.inputField,
                        {
                            borderColor: 1 > values.password.length || values.password.length >= 8 ? 'black' : 'red'
                        }
                        ]} >
                            <TextInput

                                placeholder='Password '
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry={true}
                                textContentType='password'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                        </View>

                        <View style={{ alignItems: 'flex-end', marginBottom: 30 }}>
                            <Text style={{ color: '#6BB0F5' }}>Forgot Password?</Text>
                        </View>

                        <Pressable
                            style={styles.button(isValid)}
                            onPress={handleSubmit}
                            disabled={!isValid}
                        >

                            <Text style={styles.buttonText}>Create Account</Text>
                        </Pressable>
                        <View style={styles.signupContainer}>
                            <Text>Already have an account? </Text>
                            <TouchableOpacity onPress={() => Navigation.navigate('Login')}>
                                <Text style={{ color: '#6BB0F5' }}> Log In</Text>
                            </TouchableOpacity>

                        </View>

                    </>
                )}
            </Formik>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80,
    },
    inputField: {
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 15,
        padding: 12,
    },
    button: isValid => ({
        backgroundColor: isValid ? "#0096F6" : '#9ACAF7',
        alignItems: "center",
        justifyContent: "center",
        minHeight: 43,
        borderRadius: 4,
    }),
    buttonText: {
        color: "white",
        fontWeight: '800',
        fontSize: 16,

    },
    signupContainer: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: "center",
        marginTop: 40,
 }

});

export default SignUpForm