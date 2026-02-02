import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { mapContacts, fetchContactsSuccess } from '../redux/Store'; 
import { useContacts } from '../context/ContactContext';
import ContactListItem from '../components/ContactListItem';
import { Contact } from '../types';

interface Props {
    navigation: any;
}

const Contacts = ({ navigation }:Props) => {
//   const dispatch = useDispatch();
//   const { contacts } = useSelector((state) => state.contacts);
    const { contacts } = useContacts();

    const renderContacts = ({ item } : { item: Contact }) => {
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

//   useEffect(() => {
//     fetchContacts()
//       .then((data) => {
//         dispatch(fetchContactsSuccess(data));
//       })
//       .catch((e) => console.log(e));
//   }, [dispatch]); 

  

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