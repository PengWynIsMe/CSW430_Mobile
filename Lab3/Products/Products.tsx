import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { IconButton } from 'react-native-paper';

type Product = {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  rating: number;
  stock: number;
  category: string;
};

type ItemProps = {
  title: string;
  thumbnail: string;
  price: number;
  rating: number;
  stock: number;
  category: string;
};

const Item = ({
  title,
  thumbnail,
  price,
  rating,
  stock,
  category,
}: ItemProps) => (
  <View style={styles.item}>
    <Image
      source={{ uri: thumbnail }}
      style={styles.image}
    />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text>{price}</Text>
      <Text>{category}</Text>
      <Text><IconButton style={{ paddingTop: 10 }} icon="star" size={15}/>{rating}</Text>
      <Text style={styles.stock}>
        {stock > 0 ? `In stock: ${stock}` : 'Out of stock'}
      </Text>
    </View>
  </View>
);

const API_URL = 'https://dummyjson.com/products/';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();

        setProducts(json.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return(
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <Item 
            title={item.title}
            category={item.category}
            thumbnail = {item.thumbnail} 
            price={item.price}
            rating={item.rating}
            stock={item.stock}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 8,
  },
  textContainer: {
    flex: 1,             
    marginLeft: 12,
  },
  stock: {
    fontSize: 12,
    color: '#388e3c',
    marginTop: 4,
  },
});

export default Products;