/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Product} from '../model/Product';
import {ProductCatalogVM} from '../viewModel/ProductCatalogVM';

const ProductCatalogScreen: React.FC = () => {
  const viewModel = new ProductCatalogVM();
  const [products, setProducts] = useState(viewModel.getProducts());

  const addProduct = (name: string, price: number) => {
    const product = new Product(`${Date.now() + name}`, name, price);
    viewModel.addProduct(product);
    setProducts(viewModel.getProducts());
  };

  useEffect(() => {
    addProduct('Product 1', 10);
    addProduct('Product 2', 20);
  }, []);

  return (
    <View>
      <Text>Product Catalog</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Text>
            {item.name} - ${item.price}
          </Text>
        )}
      />
    </View>
  );
};

export default ProductCatalogScreen;
