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
      <View style={styles.avatarContainer}>
        <Image source={require('../../img/foto.png')} style={styles.avatar} />
      </View>
      <View style={styles.userInfoContainer}>
      <Text style={styles.premiumText}>Premium Account</Text>
        <Text style={styles.userInfoText}>Madazyan</Text>
        <Text style={styles.userInfoText}>madazyan@itera.ac.id</Text>
      </View>
      <TouchableOpacity
        style={styles.changePasswordButton}
        onPress={() => navigation.navigate('UpdatePass')}
      >
        <Text style={styles.changePasswordButtonText}>Ganti Password</Text>
      </TouchableOpacity>
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
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    marginRight: 5,
    borderRadius: 60,
  },
  premiumText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d58512',
    marginTop: 20,
    textAlign: 'center',
  },
  userImage: {
    width: '100%',
    height: 240,
    marginBottom: 20,
  },
  imagePickerButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  userInfoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
  },
  userInfoText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
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
    fontWeight: 'bold',
  },
});

export default UpdateUser;
