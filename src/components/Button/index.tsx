import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

interface ButtonProps {
  text: string;
  type: string;
  onPress: () => void;
  containerStyles?: object;
}

const Button = ({text, type, onPress, containerStyles}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, containerStyles]}>
      {type === 'Cart' && (
        <Feather
          size={18}
          style={{paddingRight: 10, fontWeight: 'bold'}}
          color={'#fff'}
          name="shopping-cart"
        />
      )}
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#e47911',
    marginVertical: 10,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderColor: '#a15e1b',
  },
  text: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Button;
