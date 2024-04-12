import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SunScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Información sobre el Sol</Text>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/312px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg' }}
          style={styles.image}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text>Tipo: Estrella</Text>
        <Text>Masa: 1.989 × 10^30 kg</Text>
        <Text>Radio: 696.340 km</Text>
        <Text>Distancia Media al Sol: N/A (el Sol es la referencia para la distancia en el sistema solar)</Text>
        <Text>Periodo Orbital: 225-250 millones de años alrededor de la Vía Láctea</Text>
        <Text>Periodo de Rotación: 25,38 días (a la latitud ecuatorial), 33,5 días (a la latitud de 16°)</Text>
        <Text>Edad: 4.6 mil millones de años</Text>
        <Text>Temperatura Superficial: 5,500 °C</Text>
        <Text>El Sol es una estrella ubicada en el centro del sistema solar. Es una esfera de gas caliente compuesta 
            principalmente de hidrógeno y helio. Con una masa de aproximadamente 1.989 × 10^30 kg y un radio de 
            696,340 km, el Sol es una fuente crucial de energía para la vida en la Tierra. Su período de rotación 
            varía según la latitud, siendo de alrededor de 25.38 días en el ecuador y 33.5 días a una latitud de 16°. 
            No orbita alrededor de ningún otro cuerpo en el sistema solar y no tiene lunas.</Text>
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

export default SunScreen;