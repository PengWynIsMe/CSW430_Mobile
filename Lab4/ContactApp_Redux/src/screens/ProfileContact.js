import React from 'react';
import DetailListItem from '../components/DetailListItem'
import { StyleSheet, View } from 'react-native';
import ContactThumb from '../components/ContactThumb';
import { IconButton } from 'react-native-paper';

const ProfileContact = ({route}) => {
  const {contact} = route.params;
  const { id, avatar, name, email, phone, cell, favorite } = contact;

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
              // Tạm thời để trống, ta sẽ xử lý logic bấm nút này sau
              console.log("Pressed Favorite"); 
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