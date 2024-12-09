import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {CartService} from './services/CartService';
import {PriceCalculator} from './services/PriceCalculator';

const ShoppingCartScreen: React.FC = () => {
  const cartService = new CartService();
  const calculator = new PriceCalculator();

  cartService.addItem({name: 'PoloShirts', price: 100, quantity: 1});
  cartService.addItem({name: 'Jeans', price: 400, quantity: 1});

  const total = calculator.calculateTotal(cartService.getItems());

  return (
    <View>
      <View style={styles.itemContainer}>
        {cartService.getItems().map((item, index) => (
          <View key={index} style={styles.item}>
            <Text>{`${item.name} - $${item.price}`}</Text>
            <Text>{`Qty: ${item.quantity}`}</Text>
          </View>
        ))}
      </View>
      <Text>Shopping Cart</Text>
      <Text>{`Total: $${total}`}</Text>
      <Button
        title="Checkout"
        onPress={() => console.log(`Checkout: $${total}`)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    margin: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingLeft: 10,
    borderWidth: 1,
  },
});

export default ShoppingCartScreen;
