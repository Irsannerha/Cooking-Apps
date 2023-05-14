import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import { useAuth } from '../context/auth-context';
import useHttp from '../hooks/use-http';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { ActivityIndicator } from 'react-native';
import Toast from 'react-native-toast-message';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Please enter email'),
  password: Yup.string().required('Please enter password'),
});

const LoginScreen = () => {
  const { isLoading, error, sendRequest } = useHttp();
  const { updateToken } = useAuth();
  const navigation = useNavigation();
 

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      sendRequest(
        {
          method: 'POST',
          url: '/api/v1/users/login',
          body: values,
        },
        (responseData) => {
          updateToken(responseData.token);
          Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'You have successfully logged in!',
            visibilityTime: 5000,
            autoHide: true,
          });
          // if have token, navigate to HomeScreen
          if (responseData.token) {
            navigation.navigate('HomeScreen');
          }
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
        {isLoading && <ActivityIndicator size='large' color='#DF0606' />}
        {!isLoading && (
          <TouchableOpacity style={styles.button} onPress={formik.handleSubmit}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        )}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Do you have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RegisterScreen'); // navigasi ke halaman RegisterScreen
            }}
          >
            <Text style={styles.signupButton}>Sign up</Text>
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
  logo: {
    width: 230,
    height: 230,
    borderRadius: 200,
    marginBottom: 100,
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
  error: {
    color: 'red',
    fontSize: 14,
    alignSelf: 'flex-start',
    marginTop: -10,
    marginLeft: 10,
    marginBottom: 10,
  },
});

export default LoginScreen;
