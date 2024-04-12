import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const EarthScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Información sobre la Tierra</Text>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/As08-16-2593.jpg/280px-As08-16-2593.jpg' }}
          style={styles.image}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text>Tipo: Planeta rocoso</Text>
        <Text>Masa: 5.972 × 10^24 kg</Text>
        <Text>Radio: 6,371 km</Text>
        <Text>Distancia Media al Sol: 149.598.262 km</Text>
        <Text>Periodo Orbital: 365.24 días</Text>
        <Text>Periodo de Rotación: 1 día</Text>
        <Text>Número de Lunas: 1</Text>
        <Text>La Tierra es el tercer planeta del sistema solar, caracterizado como un "planeta rocoso" con una masa 
            de aproximadamente 5.972 × 10^24 kg y un radio de 6,371 km. Está situado a una distancia media del Sol de 
            aproximadamente 149,598,262 km y tiene un período orbital de 365.24 días. La Tierra tiene una sola luna y 
            su período de rotación es de aproximadamente 1 día. Es el único cuerpo conocido en el universo que alberga vida.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  infoContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    borderRadius: 8,
  },
});

export default EarthScreen;