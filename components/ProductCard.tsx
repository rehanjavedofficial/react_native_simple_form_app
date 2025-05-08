import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export interface ProductProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  onDelete: () => void;
}

const ProductCard: React.FC<ProductProps> = ({ name, price, quantity, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>${price.toFixed(2)}</Text>
      </View>

      <Text style={styles.quantity}>{quantity}</Text>

      <TouchableOpacity style={styles.deleteBox} onPress={onDelete}>
        <Text style={styles.cross}>✕</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    borderRadius: 5
  },
  leftSection: {
    flex: 1,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  productPrice: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5
  },
  quantity: {
    fontSize: 24,
    marginHorizontal: 20,
    fontWeight: '300'
  },
  deleteBox: {
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  cross: {
    fontSize: 30,
    color: 'black',
    fontWeight: '900'
  },
});

export default ProductCard;
