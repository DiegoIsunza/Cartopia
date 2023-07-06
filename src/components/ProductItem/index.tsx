import React from 'react';
import {Image, View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}

const ProductItem = ({item}: ProductItemProps) => {
  return (
    <View style={styles.root}>
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
  );
};

export default ProductItem;
