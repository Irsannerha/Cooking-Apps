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

    return (
        <View style={StyleSheet.container}>
            {userImage && (
                <TouchableOpacity onPress={handleImagePicker}>
                    <Image source={{uri: userImage}} style={styles.userImage} />
                </TouchableOpacity>
            )}

            {!userImage && (
                <TouchableOpacity style={StyleSheet.ImagePickerButton} onPress={handleImagePicker}>
                    <Image source={require('../../img/Uploads.jpg')} style={styles.uploadIcon} />
                    <Text style={StyleSheet.ImagePickerButtonText}>Upload Foto</Text>
                </TouchableOpacity>
            )}

            <View style={styles.centered}>
                <TextInput placeholder="Name" style={styles.textInput} value={userName} onChangeText={text => setUserName(text)} />
                <TextInput placeholder="E-mai" style={styles.textInput} value={userEmail} onChangeText={text => setUserEmail(text)} />
                <TouchableOpacity style={styles.changePasswordButton} onPress={handleChangePassword}>
                <Text style={styles.changePasswordButtonText}>Ganti Password</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}