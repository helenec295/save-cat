import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AddPet() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Pet</Text>

      // form submission to mongodb
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
