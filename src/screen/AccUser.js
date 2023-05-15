import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import BackButton from '../components/BackButton';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/auth-context';
import Toast from 'react-native-toast-message';

const AccUser = () => {
  const navigation = useNavigation();
  const { user, updateToken, updateUser } = useAuth();

  const handleLogout = () => {
    updateToken(null);
    updateUser({});
    navigation.navigate('LoginScreen');
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'You have successfully logged out!',
      visibilityTime: 5000,
      autoHide: true,
    });
  };

  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.header}>
        <Image source={require('../../img/foto.png')} style={styles.avatar} />
        <Text style={styles.premiumText}>Premium Account</Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={[styles.name, { textAlign: 'center' }]}>
          {user.name || 'User name'}
        </Text>
        <Text style={[styles.email, { textAlign: 'center' }]}>
          {user.email || 'User email'}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => navigation.navigate('UpdateUser')}
      >
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

