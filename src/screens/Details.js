import { SafeAreaView, Text, StyleSheet, View, ImageBackground, Image, Button  } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import User from '../assets/oggy.jpg'
import { StatusBar } from 'expo-status-bar'
import petData from '../data/Pets'

export default function Details({ navigation, route }) {
  const pet = route.params;
  return (
    <View style={styles.detailsContainer} >
      <StatusBar backgroundColor='#f8f8f8' />
      <View>
        <View style={{height: 400, backgroundColor: '#f8f8f8'}}>
          <ImageBackground 
            resizeMode='contain' 
            style= {{height: 280, top: 20}} 
            source={pet?.image}
          >
            <View style={styles.header}>
              <Icon 
                name='arrow-left' 
                size={28} color='#505050' 
                onPress={navigation.goBack} 
              />
              <Icon 
                name='dots-vertical' 
                size={28} color='#505050'                 
              />
            </View>
          </ImageBackground>

          <View style={styles.petDetails}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 20, color: '#505050', fontWeight: 'bold'}} >{pet?.name}</Text>
                <Icon name="gender-male" size={25} color='#505050' />
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
                <Text style={{fontSize: 12, color: '#505050'}} >{pet?.type}</Text>
                <Text style={{fontSize: 13, color: '#505050'}} >{pet?.age}</Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Icon name="map-marker" size={20} color='#efc050' />
                <Text style={{fontSize: 13, color: '#505050', marginLeft: 5}} >Glen Rock, NJ</Text>
              </View>
          </View>

        </View>
      </View>
      <View style={{marginTop: 80, flex: 1, justifyContent: 'space-between'}} >
        <View>
          <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
            <Image source={User} style={{height: 40, width: 40, borderRadius: 20, objectFit: 'contain'}} />
            <View style={{flex: 1, paddingLeft: 10, height: 20}}>
              <Text style={{color: '#505050', fontSize: 12, fontWeight: 'bold'}}>KING OGGY</Text>
              <Text style={{color: '#505050', fontSize: 12, marginTop: 2}}>Catolog</Text>
            </View>
            <Text style={{color: '#505050', fontSize: 12}}>6/9/2023</Text>
          </View>
          <Text style={styles.userInfo}>
            Lorem ipsum dolor sit amet. Aut eligendi cupiditate qui quia omnis non doloremque explicabo. Hic galisum nesciunt qui velit architecto sed minima consequatur qui internos consequatur. Aut enim molestiae sed excepturi totam sit consequuntur voluptatem eum reprehenderit sint qui dolor eligendi est aperiam praesentium aut officia fuga.
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerIcon}>
            <Icon name="heart-outline" size={22} color='white' />
          </View>
          <View style={styles.footerBtn}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>ADOPTION</Text>
          </View>
        </View>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    detailsContainer: {
      flex: 1,
      backgroundColor: '#fff', 
      paddingTop: 25,     
    },
    header: {
      flexDirection: 'row',
      padding: 20,
      justifyContent: 'space-between',
    },
    petDetails: {
      height: 120,
      flex: 1,
      backgroundColor: 'white',
      padding: 20,
      marginHorizontal: 20,
      bottom: -60,
      elevation: 10,
      borderRadius: 18,
      justifyContent: 'center'
    },
    userInfo: {
      marginTop: 10, 
      fontSize: 12.5,
      color: '#505050',
      lineHeight: 20,
      marginHorizontal: 20,
    },
    footer: {
      height: 100,
      backgroundColor: '#f8f8f8',
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20

    },
    footerIcon: {
      backgroundColor: '#efc050',
      width: 50, 
      height: 50,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 15
    }, 
    footerBtn: {
      backgroundColor: '#efc050',
      flex: 1,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
    }
  });