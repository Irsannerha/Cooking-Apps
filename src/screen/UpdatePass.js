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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    borderRadius: 10,
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#F50',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: '100%',
  },
  saveButton: {
    backgroundColor: '#DF0606',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default UpdatePass;
