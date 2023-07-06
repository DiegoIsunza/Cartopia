import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const QuantitySelector = ({quantity, setQuantity}) => {
  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1));
  };

  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View style={styles.root}>
      <Pressable onPress={onMinus} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
      <Text style={styles.quantity}>{quantity}</Text>
      <Pressable
        onPress={onPlus}
        style={[styles.button, {backgroundColor: '#E5F9DB'}]}>
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
    borderColor: '#e3e3e3',
    width: 130,
  },
  button: {
    width: 40,
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 23,
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default QuantitySelector;
