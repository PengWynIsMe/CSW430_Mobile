import React from 'react';
import DetailListItem from '../components/DetailListItem'
import { StyleSheet, View } from 'react-native';
import ContactThumb from '../components/ContactThumb';
import { IconButton } from 'react-native-paper';
import { Contact } from '../types';
import { useContacts } from '../context/ContactContext';

interface Props {
    route: any;
}

const ProfileContact = ({route} : Props ) => {
    const { contact } = route.params;
    const { contacts, toggleFavorite } = useContacts();
    const contactData = contacts.find(c => c.id === contact.id) || contact;

    const { id, avatar, name, email, phone, cell, favorite } = contactData;

    return (
    <View style={styles.container}>
      <View style = {styles.avatarSection}>
        <ContactThumb
          avatar={avatar}
          name={name}
          phone={phone}
          textColor = "white"
          avatarSize={150}
        />
      </View>
      <View style={styles.detailsSection}>
        <DetailListItem icon="mail" title="Email" subtitle={email} />
        <DetailListItem icon="phone" title="Work" subtitle={phone} />
        <DetailListItem icon="smartphone" title="Personal" subtitle={cell} />

        {/* Nút yêu thích (Star) */}
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <IconButton
            icon={favorite === true ? "star" : "star-outline"}
            iconColor="#663399"
            size={30}
            onPress={() => {
              toggleFavorite(id);
            }}
          />
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue', 
  },
  detailsSection: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ProfileContact;