import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const EmployeeForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');

  const handleUpdate = () => {
    Alert.alert('Success', 'Employee information updated!');
  };

  return (
    <View>
      <Text>Full Name:</Text>
      <TextInput style={{ borderWidth: 1, borderColor: '#000', marginBottom: 10, padding: 8, }} value={name} onChangeText={setName} />
      <Text>Age:</Text>
      <TextInput style={{ borderWidth: 1, borderColor: '#000', marginBottom: 10, padding: 8, }} value={age} onChangeText={setAge} keyboardType="numeric" />
      <Text>Occupation:</Text>
      <TextInput style={{ borderWidth: 1, borderColor: '#000', marginBottom: 10, padding: 8, }} value={occupation} onChangeText={setOccupation} />
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

export default EmployeeForm;
