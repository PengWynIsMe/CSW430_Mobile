import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Contacts from '../screens/Contacts';
import ProfileContact from '../screens/ProfileContact';
import Favorites from '../screens/Favorites';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Contact list
function ContactsScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOptions={{
        headerShown: true,
        headerTintColor: 'blue',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen 
        name="Contacts" 
        component={Contacts} 
        options={{ title: "Contacts" }} 
      />
      <Stack.Screen 
        name="ProfileContact" 
        component={ProfileContact} 
        options={{ title: "Profile Contact" }} 
      />
    </Stack.Navigator>
  );
}

// Favorite
function FavoriteScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={{
        headerShown: true,
        headerTintColor: 'blue',
      }}
    >
      <Stack.Screen 
        name="Favorites" 
        component={Favorites} 
        options={{ title: "Favorites" }} 
      />
      <Stack.Screen 
        name="ProfileContact" 
        component={ProfileContact} 
        options={{ title: "Profile Contact" }} 
      />
    </Stack.Navigator>
  );
}

// Main
function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="ContactsTab"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'ContactsTab') {
            iconName = 'format-list-bulleted';
          } else if (route.name === 'FavoritesTab') {
            iconName = focused ? 'star' : 'star-border';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen 
        name="ContactsTab" 
        component={ContactsScreens}
        options={{ tabBarLabel: 'Contacts' }}
      />
      <Tab.Screen 
        name="FavoritesTab" 
        component={FavoriteScreens}
        options={{ tabBarLabel: 'Favorites' }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;