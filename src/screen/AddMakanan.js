import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';


const AddMakanan = () => {
  const [recipeImage, setRecipeImage] = useState(null);
  const [recipeName, setRecipeName] = useState('');
  const [recipeCategory, setRecipeCategory] = useState('');
  const [recipeTags, setRecipeTags] = useState('');
  const [recipeIngredients, setRecipeIngredients] = useState('');
  const [recipeDirections, setRecipeDirections] = useState('');

  const handleImagePicker = () => {
    ImagePicker.showImagePicker({title: 'Select Image'}, response => {
      if (response.uri) {
        setRecipeImage(response.uri);
      }
    });
  };

  const handleAddRecipe = () => {
    // Add recipe to database or perform other actions here
  };

  return (
    <View style={styles.container}>
      {recipeImage && (
        <Image source={{uri: recipeImage}} style={styles.recipeImage} />
      )}
      <TouchableOpacity style={styles.imagePickerButton} onPress={handleImagePicker}>
    <Image source={require('../../img/Uploads.jpg')} style={styles.uploadIcon} />
    <Text style={styles.imagePickerButtonText}>Upload Foto</Text>
  </TouchableOpacity>
      <TextInput
        placeholder="Nama Resep Makanan"
        style={styles.textInput}
        value={recipeName}
        onChangeText={text => setRecipeName(text)}
      />
      <TextInput
        placeholder="Masukan kategori"
        style={styles.textInput}
        value={recipeCategory}
        onChangeText={text => setRecipeCategory(text)}
      />
      <TextInput
        placeholder="Masukan Tag"
        style={styles.textInput}
        value={recipeTags}
        onChangeText={text => setRecipeTags(text)}
      />
      <TextInput
        placeholder="Bahan-Bahan"
        style={[styles.textInput, {height: 100}]}
        value={recipeIngredients}
        onChangeText={text => setRecipeIngredients(text)}
        multiline
      />
      <TextInput
        placeholder="Cara Memasak"
        style={[styles.textInput, {height: 200}]}
        value={recipeDirections}
        onChangeText={text => setRecipeDirections(text)}
        multiline
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddRecipe}>
        <Text style={styles.addButtonText}>Kirim</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2CFCF',
    borderRadius: 10,
    padding: 30,
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
    borderColor: '#ddd',
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
});

export default AddMakanan;
