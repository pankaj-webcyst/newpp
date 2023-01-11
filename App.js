import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Componant/Home';
import Login from './Componant/Login';
import Signup from './Componant/Signup';
import Form from './Componant/Form';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={Login}  />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Form' component={Form} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}