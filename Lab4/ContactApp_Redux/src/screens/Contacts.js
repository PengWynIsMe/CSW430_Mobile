import React, { useEffect } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { mapContacts, fetchContactsSuccess } from '../redux/Store'; 
import ContactListItem from '../components/ContactListItem';

const fetchContacts = async () => {
  const data = await fetch('https://randomuser.me/api/?results=50');
  const ContactData = await data.json();
  return ContactData.results.map(mapContacts);
};

const Contacts = ({ navigation }) => {
  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.contacts);

  useEffect(() => {
    fetchContacts()
      .then((data) => {
        dispatch(fetchContactsSuccess(data));
      })
      .catch((e) => console.log(e));
  }, [dispatch]); 

  const renderContacts = ({ item }) => {
    const { name, avatar, phone } = item;
    return (
      <ContactListItem
        name={name}
        avatar={avatar}
        phone={phone}
        onPress={() =>
          navigation.navigate('ProfileContact', { contact: item })
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      {contacts.length === 0 ? (
        <View style={styles.center}>
            <Text>Loading...</Text>
        </View>
      ) : (
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id}
          renderItem={renderContacts}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Contacts;