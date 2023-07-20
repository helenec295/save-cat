
import React from 'react';
import { 
  Donation, 
  AddPet, 
  Favorites, 
  About, 
  PetFinderAll} from '../screens';
import { 
  createDrawerNavigator, 
  DrawerContentScrollView,
  DrawerItemList
 } from '@react-navigation/drawer';
 import TabNavigator from './TabNavigator';
import Icon from 'react-native-vector-icons/Ionicons'
import { 
  View, 
  StyleSheet, 
  Image, 
  Text, 
  StatusBar 
} from 'react-native';
import Logo from '../../assets/'


const Drawer = createDrawerNavigator();



const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView 
      style={styles.drawerContainer} 
      scrollEnabled={true}
      contentContainerStyle={{flex: 1}}
      {...props}
      >
        <View style={styles.imgContainer}>
          <Image source={Logo} style={styles.userImg} />
          <Text style={styles.userName}>KING OGGY</Text>
        </View>
        <DrawerItemList {...props} />        
      
    </DrawerContentScrollView>
  )
}



function DrawerNavigator() {
  return (
    <Drawer.Navigator 
          screenOptions={{
            headerShown: true,
            drawerType: 'slide',
            drawerStyle: {
              width: 200,
              backgroundColor: '#505050',
            },
            overlayColor: null,
            sceneContainerStyle: {
              backgroundColor: '#505050',
              
            }, 
            
            itemStyle: {
              marginVertical: 5
            },
            drawerActiveTintColor: 'white',
            drawerInactiveTintColor: 'white',
            drawerItemStyle: {
              backgroundColor: null,
            },
            drawerLabelStyle: {
              fontWeight: 'bold',
              
            },
  

          }}
          drawerContent={props => <CustomDrawer {...props} />}
          detachInactiveScreens={true}         
          
    >
    
    <Drawer.Screen 
        name='Petfinder' 
        component={TabNavigator}
        options={{
          title: 'Home',
          headerShown: true,
          drawerIcon: ({color}) => (
            <Icon 
              name='gift' 
              size={25} 
              color={color} 
              style={{ marginRight: -20, }}
            />
          )
        }}                
      />
    
      <Drawer.Screen 
        name='Donation' 
        component={Donation}
        options={{
          title: 'Donation',
          drawerIcon: ({color}) => (
            <Icon 
              name='gift' 
              size={25} 
              color={color} 
              style={{ marginRight: -20, }}
            />
          )
        }}                
      />
       
      <Drawer.Screen 
        name='Add Pet'
        component={AddPet} 
        options={{
          title: 'Add Pet',
          drawerIcon: ({color}) => (
            <Icon 
              name='add-circle' 
              size={25} 
              color={color} 
              style={{ marginRight: -20, }}
            />
          )
        }}                
      />
       
      <Drawer.Screen 
        name='Favorites' 
        component={Favorites}
        options={{
          title: 'Favorites',
          drawerIcon: ({color}) => (
            <Icon 
              name='heart' 
              size={25} 
              color={color} 
              style={{ marginRight: -20, }}
            />
          )
        }}               
      />
        
      <Drawer.Screen 
        name='About' 
        component={About}
        options={{
          title: 'About',
          drawerIcon: ({color}) => (
            <Icon 
              name='person' 
              size={25} 
              color={color} 
              style={{ marginRight: -20, }}
            />
          )
        }}                
      />
      <Drawer.Screen 
        name='Pet Finder All' 
        component={PetFinderAll}
        options={{
          title: 'Pet Finder All',
          drawerIcon: ({color}) => (
            <Icon 
              name='cat' 
              size={25} 
              color={color} 
              style={{ marginRight: -20, }}
            />
          )
        }}                
      />
       
      
    </Drawer.Navigator>
  );
}


export default DrawerNavigator;

const styles = StyleSheet.create({
  drawerContainer: {
    paddingVertical: 30,
  },
  imgContainer: {
    marginLeft: 20,
    marginVertical: 40,
  },
  userImg: {
    width: 70,
    height: 70,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    objectFit: 'contain',
  },
  userName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
    marginTop: 10,
  },
  drawerListWrapper: {
    marginTop: 65,
  },
});



