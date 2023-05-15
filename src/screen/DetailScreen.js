import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import BackButton from '../components/BackButton';
import { useRoute } from '@react-navigation/native';
import useHttp from '../hooks/use-http';

const DetailScreen = () => {
  const route = useRoute();
  const { id } = route.params;
  const [recipe, setRecipe] = useState([]);
  const { isLoading, error, sendRequest } = useHttp();

  const getRecipe = useCallback(async () => {
    sendRequest(
      {
        url: `/api/v1/recipes/${id}`,
      },
      (responseData) => {
        const data = responseData.data.data;
        setRecipe(data);
      }
    );
  }, [sendRequest, id]);

  useEffect(() => {
    getRecipe();
  }, [getRecipe]);