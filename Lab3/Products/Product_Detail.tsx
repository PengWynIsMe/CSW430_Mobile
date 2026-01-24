import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Button } from 'react-native-paper';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

const Product_Detail = () => {
  const [product, setProduct] = React.useState<Product | null>(null);

  const productId = 1;

  React.useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, []);

  if (!product) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Card>
        <Card.Cover source={{ uri: product.thumbnail }} />
        <Card.Content>
          <Text style={styles.title}>{product.title}</Text>
          <Text>{product.description}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
        </Card.Content>
        <Card.Actions>
          <Button>Delete</Button>
          <Button>Back</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    padding: 16,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  price: {
    marginTop: 12,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Product_Detail;
