import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

export default function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState<string | null>(null);
  const [firstValue, setFirstValue] = useState('');

  const numbers = [
    ['7', '8', '9', '÷'],
    ['4', '5', '6', '×'],
    ['1', '2', '3', '−'],
    ['0', '+', '='],
  ];

  const operators = ['÷', '×', '−', '+', '='];

  const handleNumberInput = (num: string) => {
    setDisplayValue(displayValue === '0' ? num : displayValue + num);
  };

  const handleOperatorInput = (op: string) => {
    if (op === '=') {
      const num1 = parseFloat(firstValue);
      const num2 = parseFloat(displayValue);

      let result = 0;
      if (operator === '+') result = num1 + num2;
      if (operator === '−') result = num1 - num2;
      if (operator === '×') result = num1 * num2;
      if (operator === '÷') result = num1 / num2;

      setDisplayValue(result.toString());
      setOperator(null);
      setFirstValue('');
      return;
    }

    setOperator(op);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };

  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{displayValue}</Text>

      <View style={styles.calculator}>
        <View style={styles.numberPad}>
          {numbers.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((item) => {
                const isOperator = operators.includes(item);

                return (
                  <TouchableOpacity
                    key={item}
                    style={[
                      styles.button,
                      item === '0' && styles.zeroButton,
                      isOperator && styles.operatorButton,
                      item === '=' && styles.equalButton,
                    ]}
                    onPress={() =>
                      isOperator
                        ? handleOperatorInput(item)
                        : handleNumberInput(item)
                    }
                  >
                    <Text
                      style={[
                        styles.buttonText,
                        isOperator && styles.operatorText,
                        item === '=' && styles.equalText,
                      ]}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}

          <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
            <Text style={styles.clearText}>C</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
