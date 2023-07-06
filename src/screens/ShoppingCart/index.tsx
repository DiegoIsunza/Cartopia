import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import CartProductItem from '../../components/CartProductItem';
import Button from '../../components/Button';

import products from '../../data/cart';

const totalPrice = products.reduce(
  (summedPrice, product) => summedPrice + product.item.price * product.quantity,
  0,
);

const ShoppingCartHeader = () => (
  <View>
    <Text style={{fontSize: 18}}>
      Subtotal ({products.length} items):{' '}
      <Text style={{color: '#B31312', fontWeight: 'bold'}}>
        ${totalPrice.toFixed(2)}
      </Text>
    </Text>
    <Button
      text="Proceed to checkout"
      type="Checkout"
      onPress={() => console.warn('Checkout')}
    />
  </View>
);

const ShoppingCart = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <ShoppingCartHeader />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default ShoppingCart;
