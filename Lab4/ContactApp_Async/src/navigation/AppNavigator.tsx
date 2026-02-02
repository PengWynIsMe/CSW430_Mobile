import React from 'react';
import { TouchableOpacity } from 'react-native'; 
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Contacts from '../screens/Contacts';
import ProfileContact from '../screens/ProfileContact';
import Favorites from '../screens/Favorites';
import { Contact } from '../types';

export type ContactStackParamList = {
  Contacts: undefined;
  ProfileContact: { contact: Contact };
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

//Tạo Component nút Menu
const MenuIcon = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity onPress={onPress} style={{ marginLeft: 15 }}>
    <MaterialIcons name="menu" size={24} color="blue" />
  </TouchableOpacity>
);

function ContactsScreens({ navigation }: { navigation: any }) {
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
        options={{ 
          title: "Contacts",
          headerLeft: () => <MenuIcon onPress={() => navigation.openDrawer()} /> 
        }} 
      />
      <Stack.Screen 
        name="ProfileContact" 
        component={ProfileContact} 
        options={{ title: "Profile Contact" }} 
      />
    </Stack.Navigator>
  );
}
function FavoriteScreens({ navigation }: { navigation: any }) {
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
        options={{ 
          title: "Favorites",
          headerLeft: () => <MenuIcon onPress={() => navigation.openDrawer()} />
        }} 
      />
      <Stack.Screen 
        name="ProfileContact" 
        component={ProfileContact} 
        options={{ title: "Profile Contact" }} 
      />
    </Stack.Navigator>
  );
}

// Main Navigator
function AppNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="ContactsTab"
      screenOptions={{
        headerShown: false, // Ẩn header của Drawer (để dùng header của Stack ở trên)
        drawerActiveTintColor: 'blue',
        drawerInactiveTintColor: 'gray',
        drawerType: 'slide',
      }}
    >
      <Drawer.Screen 
        name="ContactsTab" 
        component={ContactsScreens}
        options={{ 
          drawerLabel: 'Contacts', 
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="format-list-bulleted" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="FavoritesDrawer" 
        component={FavoriteScreens}
        options={{ 
          drawerLabel: 'Favorites',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default AppNavigator;