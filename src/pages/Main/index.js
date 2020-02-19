import React from 'react';
import { FlatList } from 'react-native';

import api from '../../services/api';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles';

class Main extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await api.get('/products');

    const { data } = response;

    this.setState({ products: data });
  };

  renderProduct = ({ item }) => {
    return (
      <Product>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.price}</ProductPrice>
        <AddButton>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <ProductAmountText>3</ProductAmountText>
          </ProductAmount>
          <AddButtonText>ADICIONAR</AddButtonText>
        </AddButton>
      </Product>
    );
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          extraData={this.props}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProduct}
        />
      </Container>
    );
  }
}

export default Main;

/**
 * flatlist:
 * data -> onde estarão os dados da lista (array)
 * keyExtrator -> o primeiro item tem uma propriedade key (item único)
 * renderItem -> recebe uma função que recebe várias infos, ex: item que é o usuário por exemplo
 *
 */
