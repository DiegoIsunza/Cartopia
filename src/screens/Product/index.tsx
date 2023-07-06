import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import styles from './styles';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import product from '../../data/product';
import ImageCarousel from '../../components/ImageCarousel';

const Product = () => {
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0] : null,
  );
  const [quantity, setQuantity] = useState(1);

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>

      {/* Image Carousel */}
      <ImageCarousel images={product.images} />

      {/* Option Selector */}
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options.map((option, i) => (
          <Picker.Item key={i} label={option} value={option} />
        ))}
      </Picker>

      {/* Price */}

      {/* Description */}
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>
        Product Information
      </Text>
      <Text style={styles.description}>{product.description}</Text>

      {/* Quantity Selector */}
      <View style={styles.priceQuantityContainer}>
        <View style={styles.textContainer}>
          <Text style={{color: '#B7B7B7', fontWeight: 'bold', fontSize: 16}}>
            Price:{' '}
          </Text>
          <Text style={styles.price}>${product.price}</Text>
          {product.oldPrice && (
            <Text style={styles.oldPrice}> ${product.oldPrice}</Text>
          )}
        </View>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </View>

      {/* Button */}
      <Button
        text="Add to cart"
        type="Cart"
        onPress={() => {}}
        containerStyles={{
          flexDirection: 'row',
        }}
      />
    </ScrollView>
  );
};

export default Product;
