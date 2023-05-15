import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const UpdatePass = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
  
    const handleSavePassword = () => {
      // Save new password to database or perform other actions here
    };
   
};