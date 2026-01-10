import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const SumDigits = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    if (number.length > 0) {
      const first = parseInt(number[0]);
      const last = parseInt(number[number.length - 1]);
      setResult(first + last);
    }
  };

  return (
    <View>
      <Text>Enter a number:</Text>
      <TextInput style={{ borderWidth: 1, borderColor: '#000', marginBottom: 10, padding: 8, }} value={number} onChangeText={setNumber} keyboardType="numeric" />
      <Button title="Calculate" onPress={handleCalculate} />
      {result !== null && <Text>Result: {result}</Text>}
    </View>
  );
};

export default SumDigits;
