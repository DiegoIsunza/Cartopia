import React, {useState} from 'react';
import {Image, View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import QuantitySelectorCheckout from '../QuantitySelectorCheckout';

import styles from './styles';

interface CartProductItemProps {
  cartItem: {
    id: string;
    quantity: number;
    option?: string;
    item: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?: number;
    };
  };
}

const CartProductItem = ({cartItem}: CartProductItemProps) => {
  const {quantity: quantityProp, item} = cartItem;

  const [quantity, setQuantity] = useState(quantityProp);

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />

        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {item.title}
          </Text>
          {/* ratings */}
          <View style={styles.ratingsContainer}>
            {[1, 2, 3, 4, 5].map((el, i) => (
              <FontAwesome
                key={`${item.id}-${i}`}
                style={styles.star}
                name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                size={18}
                color="#e47911"
              />
            ))}
            <Text>{item.ratings}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.price}>from ${item.price}</Text>
            {item.oldPrice && (
              <Text style={styles.oldPrice}> ${item.oldPrice}</Text>
            )}
          </View>
        </View>
      </View>
      <View style={styles.finalRow}>
        <View style={styles.quantityContainer}>
          <QuantitySelectorCheckout
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </View>
        <View style={styles.deleteButton}>
          <FontAwesome
            style={{paddingRight: 5}}
            name="trash-o"
            size={18}
            color="#e47911"
          />
          <Text>Delete</Text>
        </View>
        <View style={styles.save}>
          <Feather
            style={{paddingRight: 4}}
            name="clock"
            size={16}
            color="#e47911"
          />
          <Text>Save for later</Text>
        </View>
      </View>
    </View>
  );
};

export default CartProductItem;
