import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetailScreen = ({ route }) => {
  const makanan = route.params && route.params.makanan ? route.params.makanan : {};

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../img/bg.jpg')} style={styles.gambarMakanan} />
      </View>
      <View style={styles.deskripsiContainer}>
        <Text style={styles.namaMakanan}>{makanan.namaMakanan}</Text>
        <View style={styles.divider} />
        <Text style={styles.title}>Bahan:</Text>
        <View>
          {makanan.bahan && makanan.bahan.map((bahan, index) => (
            <Text style={styles.listBahan} key={index}>- {bahan}</Text>
          ))}
        </View>
        <View style={styles.divider} />
        <Text style={styles.title}>Cara membuat:</Text>
        <Text style={styles.caraMembuat}>{makanan.caraMembuat}</Text>
      </View>
    </View>
  );
};

export default DetailScreen;

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
    padding: 16,
    borderRadius: 20,
    backgroundColor: '#A51B0B',
    position: 'absolute',
    top: -100,
    zIndex: 1,
    width: 370,
    height: 643,
    left: 10,
    top: 218,
  },
  namaMakanan: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#fff',
  },
  listBahan: {
    marginLeft: 16,
    marginBottom: 4,
    color: '#000',
  },
  caraMembuat: {
    marginLeft: 16,
    marginBottom: 16,
    color: '#000',
  },
});
