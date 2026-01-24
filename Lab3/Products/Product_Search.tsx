import * as React from 'react';
import {View, Alert, StyleSheet, Text, FlatList} from 'react-native';
import { Button, TextInput, Card } from 'react-native-paper';


const Product_Search = () => {
  // const [text, setText] = React.useState("");
  const [value, setValue] = React.useState("");
  const [data, setData] = React.useState([]);

  const searchProduct = () => {
  let filePath = 'https://dummyjson.com/products';

  if (value !== '') {
    filePath = 'https://dummyjson.com/products/search?q=' + value;
  }

  fetch(filePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((d) => {
      setData(d.products);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
};

  const renderItem = ({ item }: any) => (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: item.thumbnail }} />

      <Card.Content>
        <Text style={styles.title}>{item.title}</Text>
        <Text numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={styles.price}>$ {item.price}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text>Find your product</Text>
      <TextInput
        label="Search..."
        value={value}
        onChangeText={setValue}
      />
      <Button mode="contained" onPress={searchProduct}>
        Search Product
      </Button>

      <FlatList
      style={styles.list}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:70,
    flex: 1,
  },
  card: {
    marginBottom: 12,
    borderRadius: 10,
  },
  price: {
    marginTop: 6,
    fontWeight: 'bold',

  },
  list:{
    marginTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default Product_Search;

