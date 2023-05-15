import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import BackButton from '../components/BackButton';
import { useRoute } from '@react-navigation/native';
import useHttp from '../hooks/use-http';
