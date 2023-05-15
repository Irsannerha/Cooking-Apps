import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import BackButton from '../components/BackButton';
import useHttp from '../hooks/use-http';

const UpdatePass = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const { isLoading, sendRequest } = useHttp();

  const handleSavePassword = () => {
    sendRequest(
      {
        url: '/api/v1/users/updateMyPassword',
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          currentPassword: oldPassword,
          newPassword: newPassword,
          confirmPassword: passwordConfirm,
        },
      },
      (data) => {
        console.log(data);
      }
    );
  };

  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.title}>Ganti Password</Text>
      <TextInput
        secureTextEntry
        placeholder='Masukkan Password Lama'
        style={styles.textInput}
        value={oldPassword}
        onChangeText={(text) => setOldPassword(text)}
      />
      <TextInput
        secureTextEntry
        placeholder='Masukkan Password Baru'
        style={styles.textInput}
        value={newPassword}
        onChangeText={(text) => setNewPassword(text)}
      />
      <TextInput
        secureTextEntry
        placeholder='Masukkan Password Baru confirm'
        style={styles.textInput}
        value={passwordConfirm}
        onChangeText={(text) => setPasswordConfirm(text)}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSavePassword}>
        <Text style={styles.saveButtonText}>Simpan</Text>
      </TouchableOpacity>
    </View>
  );
};