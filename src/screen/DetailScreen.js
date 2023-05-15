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


