import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet } from 'react-native';
import instance from '../axios';

export default function PetFinderAll() {
  const [cats, setCats] = useState([]);
  const [location, setLocation] = useState('');

  const fetchCats = async () => {
    try {
      const response = await instance.get(`?type=cat&location=${location}&distance=10`);
      setCats(response.data.animals);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = () => {
    if (location) {
      fetchCats();
    }
  };

  return (
    <View style={styles.petFinder}>
      <View style={styles.formContainer}>
        <Text>Location:</Text>
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={(text) => setLocation(text)}
        />
        <Button title="Search" onPress={handleSubmit} />
      </View>
      {cats.map((cat) => (
        <View key={cat.id} style={styles.catContainer}>
          <Text style={styles.catName}>{cat.name}</Text>
          <Image
            source={{ uri: cat.photos[0]?.medium }}
            style={styles.catImage}
            resizeMode="cover"
          />
          <Text>{cat.description}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  petFinder: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  formContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 10,
    paddingHorizontal: 10,
  },
  catContainer: {
    marginBottom: 20,
  },
  catName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  catImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});
