import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import BackButton from '../components/BackButton';
import { useNavigation } from '@react-navigation/native';

const UpdateUser = () => {
  const [userImage, setUserImage] = useState(null);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const navigation = useNavigation();

  const handleImagePicker = () => {
    ImagePicker.showImagePicker({ title: 'Select Image' }, (response) => {
      if (response.uri) {
        setUserImage(response.uri);
      }
    });
  };

  const handleChangePassword = () => {
    // Perform actions for changing password here
  };

  return (
    <View style={styles.container}>
      <BackButton />
      {userImage && (
        <TouchableOpacity onPress={handleImagePicker}>
          <Image source={{ uri: userImage }} style={styles.userImage} />
        </TouchableOpacity>
      )}
      {!userImage && (
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
      )}
      <View style={styles.centered}>
        <TextInput
          placeholder='Madazyan'
          style={styles.textInput}
          value={userName}
          onChangeText={(text) => setUserName(text)}
        />
        <TextInput
          placeholder='madazyan@mail.com'
          style={styles.textInput}
          value={userEmail}
          onChangeText={(text) => setUserEmail(text)}
        />
        <TouchableOpacity
          style={styles.changePasswordButton}
          onPress={handleChangePassword}
        >
          <Text
            style={styles.changePasswordButtonText}
            onPress={() => navigation.navigate('UpdatePass')}
          >
            Ganti Password
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    borderRadius: 10,
    padding: 50,
    paddingTop: 70,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  uploadIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
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
  textInput: {
    borderWidth: 1,
    borderColor: '#F50',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: '100%',
    color: '#000',
  },
  changePasswordButton: {
    backgroundColor: '#DF0606',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  changePasswordButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
});

export default UpdateUser;
