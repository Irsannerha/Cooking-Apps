import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useHttp from '../hooks/use-http';
import Toast from 'react-native-toast-message';
import BackButton from '../components/BackButton';
import { useNavigation } from '@react-navigation/native';
