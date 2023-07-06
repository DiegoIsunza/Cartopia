/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

const QuantitySelectorCheckout = ({quantity, setQuantity}) => {
  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1));
  };

  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View style={styles.root}>
      <Pressable
        onPress={onMinus}
        style={[styles.button, {borderEndWidth: 1, borderColor: '#e3e3e3'}]}>
        <Text style={styles.buttonText}>
          <Feather name="trash" size={16} />
        </Text>
      </Pressable>
      <Text style={styles.quantity}>{quantity}</Text>
      <Pressable
        onPress={onPlus}
        style={[
          styles.button,
          {
            backgroundColor: '#E5F9DB',
            borderStartWidth: 1,
            borderColor: '#e3e3e3',
          },
        ]}>
        <Text style={[styles.buttonText, {color: '#17594A'}]}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e3e3e3',
    width: 130,
    borderRadius: 3,
  },
  button: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
  },
  quantity: {
    color: '#007eb9',
  },
});

export default QuantitySelectorCheckout;
