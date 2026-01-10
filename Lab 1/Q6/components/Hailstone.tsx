import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const Hailstone = () => {
  const [n, setN] = useState('');
  const [sequence, setSequence] = useState<number[]>([]);

  const generateSequence = () => {
    let num = parseInt(n);
    if (num > 0) {
      let seq = [];
      while (num !== 1) {
        seq.push(num);
        num = num % 2 === 0 ? num / 2 : num * 3 + 1;
      }
      seq.push(1);
      setSequence(seq);
    }
  };

  return (
    <View>
      <TextInput style={{ borderWidth: 1, borderColor: '#000', marginBottom: 10, padding: 8, }} value={n} onChangeText={setN} keyboardType="numeric" />
      <Button title="Generate" onPress={generateSequence} />
      {sequence.length > 0 && <Text>{sequence.join(' → ')}</Text>}
    </View>
  );
};

export default Hailstone;
