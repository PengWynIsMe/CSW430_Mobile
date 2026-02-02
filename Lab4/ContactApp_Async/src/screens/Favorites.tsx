import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import ContactThumb from '../components/ContactThumb';
import { useContacts } from '../context/ContactContext';
import { Contact } from '../types';

const keyExtractor = (item: Contact) => item.id;

const Favorites = ({ navigation }: { navigation: any }) => {
  const { contacts } = useContacts();

  const favorites = contacts.filter((contact) => contact.favorite);

  const renderFavoriteThumbnail = ({ item }: { item: Contact }) => {
    const { avatar } = item;
    return (
      <View style={styles.thumbnailContainer}>
        <ContactThumb
          avatar={avatar}
          avatarSize={80}
          onPress={() => navigation.navigate('ProfileContact', { contact: item })}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text>No Favorites yet</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={keyExtractor}
          numColumns={3}
          contentContainerStyle={styles.list}
          renderItem={renderFavoriteThumbnail}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
  },
  list: {
    alignItems: 'center',
    marginTop: 50,
  },
  thumbnailContainer: {
    marginHorizontal: 5,
    marginVertical: 15,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Favorites;