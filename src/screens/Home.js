import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  Dimensions, 
  View, 
  Image,  
  TouchableOpacity,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import IconSort from 'react-native-vector-icons/MaterialCommunityIcons'
import IconPet from 'react-native-vector-icons/MaterialCommunityIcons'
import User from '../assets/oggy.jpg'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import petData from '../data/Pets'
import Details from './Details';

// local cats availiable for adoption

const {height} = Dimensions.get('window');

const petCategories = [
  {name: 'CATS', icon: 'cat'},
  {name: 'DOGS', icon: 'dog'},
  {name: 'BIRDS', icon: 'ladybug'},
  {name: 'BUNNIES', icon: 'rabbit'},
];

const Card = ({pet, navigation}) => {
  return (
    <TouchableOpacity 
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Details', pet)}
    >
      <View style={styles.petCard}>
        <View style={styles.petImage}>
          <Image 
            source={pet.image}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
        </View>
        <View style={styles.petDetails}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{fontWeight: 'bold', color: "#505050", fontSize: 20}}>
              {pet?.name}
            </Text>
            <IconPet name="gender-male" size={22} color='#505050' />
          </View>
          <Text style={{fontSize: 12, marginTop: 5, color: '#505050'}}>
            {pet?.type}
          </Text>
          <Text style={{fontSize: 10, marginTop: 5, color: '#505050'}}>
            {pet?.age}
          </Text>
          <View style={{marginTop: 5, flexDirection: 'row'}}>
            <IconPet name="map-marker" color='#505050' size={18} />
            <Text style={{fontSize: 12, color: '#505050', marginLeft: 5}}>
              Distance:7.8km
            </Text>
          </View>
        </View>

      </View>
    </TouchableOpacity>
  )
}



export default function Home ({ navigation }) {

  const [selectedPet, setSelectedPet] = useState(0);
  const [filteredPets, setFilteredPets] = useState([]);

  const filterPet = (index) => {
    const currentPet = petData.filter(
      (item) => item?.pet.toUpperCase() == petCategories[index].name
      )[0].pets;
      setFilteredPets(currentPet);
  };

 useEffect(() => {
   filterPet(0);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header}>
        <Icon 
          style={styles.menu} 
          name='sort' 
          size={28} 
          color={'#000'}
          onPress={() => navigation.toggleDrawer()}
        />
        <Text style={styles.userName}>KING OGGY</Text>
        <Image source={User} style={styles.userImg} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.mainArea} >
          <View style={styles.searchInput} >
            <Icon name='search' size={24} color='#c8c8c8' />
            <TextInput style={{flex: 1}} placeholder='search pet to adopt' placeholderTextColor='#c8c8c8' />
            <IconSort name='sort-ascending' size={24} color='#c8c8c8' />
          </View>
          <View style={styles.petFilter} >
            {
              petCategories.map((item, index) => (
                <View key={'pet' + index} style={{alignItems: 'center'}} >
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedPet(index)
                      filterPet(index);
                    }}
                    style={[styles.petFilterBtn, {
                      backgroundColor: selectedPet == index ? '#efc050' : 'white'
                    }]}
                  >
                    <IconPet name={item.icon} size={40} color={selectedPet == index ? 'white' : '#efc050'} />
                  </TouchableOpacity>
                  <Text style={styles.petFilterName}>{item.name}</Text>
                </View>
              ))
            }
          </View>
          <View style={styles.petCards} >
            <FlatList 
              showsVerticalScrollIndicator={false}
              data={filteredPets}
              renderItem={({item}) => <Card pet={item} navigation={navigation} />}
            />
          </View>

        </View>

      </ScrollView>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  userName: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    
  },
  userImg: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'black',
    objectFit: 'contain',
    
  },
  mainArea: {
    minHeight: height,
    backgroundColor: '#f8f8f8',
    marginTop: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  searchInput: {
    height: 50, 
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20, 
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  petFilter: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 20
  },
  petFilterBtn: {
    height: 50, 
    width: 50, 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#efc050'
  },
  petFilterName: {
    color: '#505050', 
    fontSize: 10,
    marginTop: 5,
    fontWeight: 'bold', 
  },
  petCards: {
    marginTop: 20,

  },
  petCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  petImage: {
    height: 150,
    width: 140,
    backgroundColor: '#c8c8c8',
    borderRadius: 20,
  },
  petDetails: {
    height: 120,
    backgroundColor: 'white',
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
    justifyContent: 'center',
  },
  
});
