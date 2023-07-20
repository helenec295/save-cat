
import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
  Petfinder, 
  Local, 
  Events,
  Shelters,
} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false, 
  tabBarStyle: {
    position: 'absolute',
    bottom: 0, 
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: '#eee',
  }
}

export default function TabNavigator() {
  return (
    <Tab.Navigator 
      screenOptions={screenOptions}
      
    
    >
      <Tab.Screen 
        name='Petfinder' 
        component={Petfinder} 
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}} >
                <Icon name='home-sharp' size={24} color={focused ? '#16247d' : '#111'} />
                <Text style={{fontSize: 12, color: '#16247d'}} >Petfinder</Text>
              </View>
            )            
          }
        }}
      />
      <Tab.Screen 
        name='Local' 
        component={Local} 
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}} >
                <Icon name='person' size={24} color={focused ? '#16247d' : '#111'} />
                <Text style={{fontSize: 12, color: '#16247d'}} >Local</Text>
              </View>
            )            
          }
        }}
      />
      <Tab.Screen 
        name='Events' 
        component={Events}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}} >
                <Icon name='heart' size={24} color={focused ? '#16247d' : '#111'} />
                <Text style={{fontSize: 12, color: '#16247d'}} >Events</Text>
              </View>
            )            
          }
        }}
      />
      <Tab.Screen 
        name='Shelters' 
        component={Shelters}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}} >
                <Icon name='gift' size={24} color={focused ? '#16247d' : '#111'} />
                <Text style={{fontSize: 12, color: '#16247d'}} >Shelters</Text>
              </View>
            )            
          }
        }}
      />
    </Tab.Navigator>
  )
}





