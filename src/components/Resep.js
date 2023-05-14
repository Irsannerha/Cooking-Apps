import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import React from 'react';

export default function Resep(props) {
  const { obj } = props;
  return (
    <ImageBackground
      source={obj.image}
      style={styles.cardResep}
      imageStyle={{ borderRadius: 15, resizeMode: 'cover' }}
    >
      <Text style={styles.title}>{obj.name}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  cardResep: {
    height: 150,
    marginBottom: 15,
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 10,
  },
});
