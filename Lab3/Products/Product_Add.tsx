import * as React from 'react';
import {View, Alert, StyleSheet, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const AddProduct = () => {
  const [product, setProduct] = React.useState({
    title: '',
    price: '',
    category: '',
    description: '',
    thumbnail: '',
  });
  
  const handleChange = (key: string, value: string) => {
    setProduct({ ...product, [key]: value });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: product.title,
          price: Number(product.price),
          category: product.category,
          description: product.description,
          thumbnail: product.thumbnail,
        }),
      });

      const json = await res.json();
      Alert.alert('Success', 'Product added!');
      console.log(json);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to add product');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Title</Text>
      <TextInput
        label="Enter Title"
        value={product.title}
        onChangeText={(text) => handleChange('title', text)}
      />
      <Text>Price</Text>
      <TextInput
        label="Enter Price"
        value={product.price}
        keyboardType="numeric"
        onChangeText={(text) => handleChange('price', text)}
      />
      <Text>Category</Text>
      <TextInput
        label="Enter Category"
        value={product.category}
        onChangeText={(text) => handleChange('category', text)}
      />
      <Text>Description</Text>
      <TextInput
        label="Enter Description"
        value={product.description}
        onChangeText={(text) => handleChange('description', text)}
      />
      <Text>Thumbnail</Text>
      <TextInput
        label="Enter Thumbnail Url"
        value={product.thumbnail}
        onChangeText={(text) => handleChange('thumbnail', text)}
      />

      <Button mode="contained" onPress={handleSubmit}>
        Add Product
      </Button>
    </View>  
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:70,
    flex: 1,
  },
});

export default AddProduct;