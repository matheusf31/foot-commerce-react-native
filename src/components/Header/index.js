import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Wrapper, Container, Logo, BasketContainer, ItemCount } from './styles';
import store from '../../store';

export default function Header({ navigation }) {
  const [product, setProduct] = useState(store.getState());

  function updateStateFromStore() {
    const currentState = store.getState();

    if (product !== currentState) {
      setProduct(currentState);
    }
  }

  useEffect(() => {
    const unsubscribeStore = store.subscribe(updateStateFromStore);

    return () => unsubscribeStore();
  });

  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{product.cart.length}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}
