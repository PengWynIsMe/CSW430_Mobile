import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const MinOfThree = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [min, setMin] = useState<number | null>(null);

  const handleFindMin = () => {
    const nums = [parseInt(a), parseInt(b), parseInt(c)];
    setMin(Math.min(...nums));
  };

  return (
    <View>
      <Text>Enter three numbers:</Text>
      <TextInput style={{ borderWidth: 1, borderColor: '#000', marginBottom: 10, padding: 8, }} value={a} onChangeText={setA} keyboardType="numeric" />
      <TextInput style={{ borderWidth: 1, borderColor: '#000', marginBottom: 10, padding: 8, }} value={b} onChangeText={setB} keyboardType="numeric" />
      <TextInput style={{ borderWidth: 1, borderColor: '#000', marginBottom: 10, padding: 8, }} value={c} onChangeText={setC} keyboardType="numeric" />
      <Button title="Find Min" onPress={handleFindMin} />
      {min !== null && <Text>Minimum: {min}</Text>}
    </View>
  );
};

export default MinOfThree;
