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