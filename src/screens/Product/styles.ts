import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: 'white',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    paddingBottom: 15,
    textAlign: 'justify',
  },
  description: {
    marginVertical: 10,
    fontWeight: '200',
    lineHeight: 20,
    textAlign: 'left',
  },
  priceQuantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});

export default styles;
