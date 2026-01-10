/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import EmployeeForm from './components/EmployeeForm'; 
import SumDigits from './components/SumDigits'; 
import MinOfThree from './components/MinOfThree'; 
import Hailstone from './components/Hailstone';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.header}>Lab 1 - Question 6</Text>

        <Text style={styles.sectionTitle}>1. Employee Form</Text>
        <EmployeeForm />

        <Text style={styles.sectionTitle}>2. Sum First & Last Digit</Text>
        <SumDigits />

        <Text style={styles.sectionTitle}>3. Minimum of Three Numbers</Text>
        <MinOfThree />

        <Text style={styles.sectionTitle}>4. Hailstone Sequence</Text>
        <Hailstone />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  scroll: {
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
    color: '#007AFF',
  },
});

export default App;