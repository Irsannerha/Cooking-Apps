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