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

  return (
    <>
      <BackButton />
      <View style={styles.container}>
        {recipeImage && (
          <Image source={{ uri: recipeImage }} style={styles.recipeImage} />
        )}
        <TouchableOpacity
          style={styles.imagePickerButton}
          onPress={handleImagePicker}
        >
          <Image
            source={require('../../img/Uploads.jpg')}
            style={styles.uploadIcon}
          />
          <Text style={styles.imagePickerButtonText}>Upload Foto</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder='Nama Resep'
          onChangeText={formik.handleChange('title')}
          onBlur={formik.handleBlur('title')}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title && (
          <Text style={styles.error}>{formik.errors.title}</Text>
        )}
        <TextInput
          style={styles.textInput}
          placeholder='Kategori'
          onChangeText={formik.handleChange('category')}
          onBlur={formik.handleBlur('category')}
          value={formik.values.category}
        />
        {formik.touched.category && formik.errors.category && (
          <Text style={styles.error}>{formik.errors.category}</Text>
        )}
        <TextInput
          style={styles.textInput}
          placeholder='Tags'
          onChangeText={formik.handleChange('tags')}
          onBlur={formik.handleBlur('tags')}
          value={formik.values.tags}
        />
        {formik.touched.tags && formik.errors.tags && (
          <Text style={styles.error}>{formik.errors.tags}</Text>
        )}
        <TextInput
          style={styles.textInput}
          placeholder='Bahan-Bahan'
          onChangeText={formik.handleChange('ingredients')}
          onBlur={formik.handleBlur('ingredients')}
          value={formik.values.ingredients}
        />
        {formik.touched.ingredients && formik.errors.ingredients && (
          <Text style={styles.error}>{formik.errors.ingredients}</Text>
        )}
        <TextInput
          style={styles.textInput}
          placeholder='Cara Memasak'
          onChangeText={formik.handleChange('steps')}
          onBlur={formik.handleBlur('steps')}
          value={formik.values.steps}
        />
        {formik.touched.steps && formik.errors.steps && (
          <Text style={styles.error}>{formik.errors.steps}</Text>
        )}
        {isLoading && <ActivityIndicator size='large' color='#DF0606' />}
        {!isLoading && (
          <TouchableOpacity
            style={styles.addButton}
            onPress={formik.handleSubmit}
          >
            <Text style={styles.addButtonText}>Kirim</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    borderRadius: 10,
    padding: 30,
    paddingTop: 80,
  },
  recipeImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  imagePickerButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  imagePickerButtonText: {
    fontSize: 18,
  },
  uploadIcon: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#DF0606',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
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

export default AddMakanan;