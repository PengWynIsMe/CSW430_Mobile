import React from 'react';
// import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
// import store from './src/redux/Store';
import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ContactProvider } from './src/context/ContactContext';

const App = () => {
  return (
    <ContactProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ContactProvider>
  );
};

export default App;