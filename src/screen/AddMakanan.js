import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useHttp from '../hooks/use-http';
import Toast from 'react-native-toast-message';
import BackButton from '../components/BackButton';
import { useNavigation } from '@react-navigation/native';

const AddMakanan = () => {
  const [recipeImage, setRecipeImage] = useState(null);
  const { isLoading, error, sendRequest } = useHttp();
  const navigation = useNavigation();

  const handleImagePicker = () => {
    // ImagePicker.showImagePicker({ title: 'Select Image' }, (response) => {
    //   if (response.uri) {
    //     setRecipeImage(response.uri);
    //   }
    // });
  };

  const AddRecipeSchema = Yup.object().shape({
    title: Yup.string().required('Required'),
    category: Yup.string().required('Required'),
    tags: Yup.string().required('Required'),
    ingredients: Yup.string().required('Required'),
    steps: Yup.string().required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      category: '',
      tags: '',
      ingredients: '',
      steps: '',
    },
    validationSchema: AddRecipeSchema,
    onSubmit: (values) => {
      sendRequest(
        {
          method: 'POST',
          url: '/api/v1/recipes',
          body: values,
        },
        (responseData) => {
          Toast.show({
            type: 'success',
            text1: 'Success',
            text2: `Recipe ${responseData.data.recipe.title} added successfully!`,
            visibilityTime: 5000,
            autoHide: true,
          });
          formik.resetForm();
          navigation.navigate('HomeScreen');
        }
      );
    },
  });
