import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Details } from '../screens' 
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false, 
  
}

export default function StackNavigator() {
  return (
    <Stack.Navigator 
      screenOptions={screenOptions} 
      
    >
        <Stack.Screen 
          name="Home" 
          component={DrawerNavigator}
          options={{title: 'Home'}}
        />
        <Stack.Screen 
          name="Details" 
          component={Details}
          options={{title: 'Details'}}
        />
        
        
      </Stack.Navigator>

    
  );
}

