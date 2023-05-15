import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const UpdatePass = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
  
    const handleSavePassword = () => {
      // Save new password to database or perform other actions here
    };

    return (
    <View style={styles.container}>
      <Text style={styles.title}>Ganti Password</Text>
      <TextInput
        secureTextEntry
        placeholder="Masukkan Password Lama"
        style={styles.textInput}
        value={oldPassword}
        onChangeText={text => setOldPassword(text)}
      />
      <TextInput
        secureTextEntry
        placeholder="Masukkan Password Baru"
        style={styles.textInput}
        value={newPassword}
        onChangeText={text => setNewPassword(text)}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSavePassword}>
        <Text style={styles.saveButtonText}>Simpan</Text>
      </TouchableOpacity>
    </View>
      );
};

export default UpdatePass;
