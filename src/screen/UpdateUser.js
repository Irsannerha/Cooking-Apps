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