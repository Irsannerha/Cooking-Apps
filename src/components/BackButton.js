import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function BackButton(props) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };
