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

  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.imageContainer}>
        <Image
          source={require('../../img/bg.jpg')}
          style={styles.gambarMakanan}
        />
      </View>
      <View style={styles.deskripsiContainer}>
        {isLoading && <ActivityIndicator size='large' color='#DF0606' />}
        {!isLoading && (
          <View>
            <Text style={styles.namaMakanan}>{recipe.title}</Text>
            <View style={styles.divider} />
            <Text style={styles.title}>Bahan:</Text>
            <View>
              {recipe.ingredients &&
                recipe.ingredients.map((ingredient, index) => (
                  <Text key={index} style={styles.listBahan}>
                    {ingredient}
                  </Text>
                ))}
            </View>
            <View style={styles.divider} />
            <Text style={styles.title}>Cara membuat:</Text>
            <View>
              {recipe.steps &&
                recipe.steps.map((step, index) => (
                  <Text key={index} style={styles.caraMembuat}>
                    {step}
                  </Text>
                ))}
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default DetailScreen;