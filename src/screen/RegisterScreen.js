import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useHttp from '../hooks/use-http';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Toast from 'react-native-toast-message';

const LoginSchema = Yup.object().shape({
  name: Yup.string().required('Please enter name'),
  email: Yup.string().email('Invalid email').required('Please enter email'),
  password: Yup.string().required('Please enter password'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm password'),
});

const RegisterScreen = () => {
  const { isLoading, error, sendRequest } = useHttp();
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '', passwordConfirm: '' },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      sendRequest(
        {
          method: 'POST',
          url: '/api/v1/users/signup',
          body: values,
        },
        (responseData) => {
          // if have token, navigate to LoginScreen
          if (responseData.token) navigation.navigate('LoginScreen');
          Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'You have successfully registered!',
            visibilityTime: 5000,
            autoHide: true,
          });
        }
      );
    },
  });

  return (
    <ImageBackground
      source={require('../../img/bg.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image
          source={require('../../img/logo-cook.png')}
          style={styles.logo}
        />
        <TextInput
          style={styles.input}
          placeholder='Name'
          onChangeText={formik.handleChange('name')}
          onBlur={formik.handleBlur('name')}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <Text style={styles.error}>{formik.errors.name}</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder='Email'
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          value={formik.values.email}
          keyboardType='email-address'
        />
        {formik.touched.email && formik.errors.email && (
          <Text style={styles.error}>{formik.errors.email}</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder='Password'
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          value={formik.values.password}
          secureTextEntry
        />
        {formik.touched.password && formik.errors.password && (
          <Text style={styles.error}>{formik.errors.password}</Text>
        )}

        <TextInput
          style={styles.input}
          placeholder='Confirm Password'
          onChangeText={formik.handleChange('passwordConfirm')}
          onBlur={formik.handleBlur('passwordConfirm')}
          value={formik.values.passwordConfirm}
          secureTextEntry
        />
        {formik.touched.passwordConfirm && formik.errors.passwordConfirm && (
          <Text style={styles.error}>{formik.errors.passwordConfirm}</Text>
        )}
        {isLoading && <ActivityIndicator size='large' color='#0000ff' />}
        {!isLoading && (
          <TouchableOpacity style={styles.button} onPress={formik.handleSubmit}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        )}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.signupButton}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 15,
    marginBottom: 10,
  },
  button: {
    width: '50%',
    backgroundColor: '#DF0606',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signupText: {
    color: '#fff',
    fontSize: 16,
  },
  signupButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo: {
    width: 230,
    height: 230,
    borderRadius: 200,
    marginBottom: 30,
  },
  error: {
    color: 'red',
    fontSize: 14,
    alignSelf: 'flex-start',
    marginTop: -10,
    marginLeft: 10,
    marginBottom: 10,
  },
});

export default RegisterScreen;
