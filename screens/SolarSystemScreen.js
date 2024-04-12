import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TextInput, Button, ActivityIndicator, StyleSheet } from 'react-native';

const SolarSystemScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchPlanets();
  }, []);

  const fetchPlanets = async () => {
    try {
      const response = await fetch('https://6615a992b8b8e32ffc7b7907.mockapi.io/dps/sistemasolar');
      const json = await response.json();
      setData(json);
      setFilteredData(json);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data: ', error);
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const filtered = data.filter(planet =>
      planet.nombre.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar planeta..."
        onChangeText={text => setSearchQuery(text)}
        value={searchQuery}
      />
      <Button title="Buscar" onPress={handleSearch} />
      {loading ? (
        <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={item => item.nombre}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image
                source={{ uri: item.imagen }}
                style={styles.planetImage}
              />
              <Text style={styles.title}>{item.nombre}</Text>
              <Text>Tipo: {item.tipo}</Text>
              <Text>Masa: {item.masa}</Text>
              <Text>Radio: {item.radio}</Text>
              <Text>Distancia Media al Sol: {item.distancia_media_al_sol}</Text>
              <Text>Periodo Orbital: {item.periodo_orbital}</Text>
              <Text>Periodo de Rotación: {item.periodo_rotacion}</Text>
              <Text>Número de Lunas: {item.numero_de_lunas}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  loader: {
    marginTop: 20,
  },
  item: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  planetImage: {
    width: 100,
    height: 100,
    marginBottom: 5,
    resizeMode: 'cover',
    borderRadius: 8,
  },
});

export default SolarSystemScreen;
