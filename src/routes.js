import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Cart from './pages/Cart';

import Header from './components/Header';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: Header,
          cardStyle: { backgroundColor: '#191920' },
        }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: 'produtos' }}
        />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
