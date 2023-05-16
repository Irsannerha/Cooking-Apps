import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import useHttp from '../hooks/use-http';

export default function Resep(props) {
  const { obj } = props;
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('DetailScreen', { id: obj.id });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.deleteButton} onPress={props.handleDelete}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardResep} onPress={handlePress}>
        <ImageBackground
          source={obj.image}
          style={styles.image}
          imageStyle={{ borderRadius: 15, resizeMode: 'cover' }}
        >
          <Text style={styles.title}>{obj.name}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    position: 'relative',
  },
  cardResep: {
    height: 150,
    flex: 1,
    marginRight: 10,
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 10,
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});



