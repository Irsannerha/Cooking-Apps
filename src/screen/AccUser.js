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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    padding: 70,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 0,
  },

  premiumText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d58512',
  },
  userInfo: {
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: 'black',
  },
  profileButton: {
    backgroundColor: '#DF0606',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: '#DF0606',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AccUser;
