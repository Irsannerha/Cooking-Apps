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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    position: 'relative',
    height: 300,
  },
  gambarMakanan: {
    width: 390,
    height: 242,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  deskripsiContainer: {
    flex: 1,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#A51B0B',
    position: 'absolute',
    top: -100,
    zIndex: 1,
    width: 340,
    height: 643,
    left: 10,
    top: 220,
  },
  namaMakanan: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#fff',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#fff',
  },
  listBahan: {
    marginLeft: 16,
    marginBottom: 4,
    color: '#fff',
  },
  caraMembuat: {
    marginLeft: 16,
    marginBottom: 16,
    color: '#fff',
  },
});

export default DetailScreen;