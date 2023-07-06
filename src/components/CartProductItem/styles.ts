import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  star: {
    margin: 2,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  quantityContainer: {
    margin: 5,
  },
  deleteButton: {
    flexDirection: 'row',
    marginLeft: 8,
    backgroundColor: '#EEEEEE',
    width: 80,
    height: 40,
    alignItems: 'center',
    borderRadius: 12,
    padding: 10,
  },
  finalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },
  save: {
    flexDirection: 'row',
    marginLeft: 8,
    backgroundColor: '#EEEEEE',
    width: 125,
    height: 40,
    alignItems: 'center',
    borderRadius: 12,
    padding: 10,
  },
});

export default styles;
