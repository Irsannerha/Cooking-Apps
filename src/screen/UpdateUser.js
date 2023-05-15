import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import ImagePicker from 'react-native-image-picker';

const UpdateUser = () => {
    const [userImage, setUserImage] = useState(null);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const handleImagePicker = () => {
        ImagePicker.showImagePicker({title: 'Select Image'}, response => {
          if (response.uri) {
            setUserImage(response.uri);
          }
        });
    };

    const handleChangePassword = () => {
        //Perform actions for change password here
    };

}