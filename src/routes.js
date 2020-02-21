import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import store from './store';

import Main from './pages/Main';
import Cart from './pages/Cart';
import Header from './components/Header';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: { backgroundColor: '#191920' },
          header: HeaderComponent,
        }}
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HeaderComponent({ navigation }) {
  return (
    <Provider store={store}>
      <Header navigation={navigation} />
    </Provider>
  );
}
