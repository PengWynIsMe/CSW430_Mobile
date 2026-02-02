import { TouchableHighlight, View, Image, Text, StyleSheet } from 'react-native';


interface Props {
    name?: string;
    avatar?: string;
    phone?: string;
    onPress?: () => void;
}

const ContactListItem = ({ name, avatar, phone, onPress } : Props) => {
  return (
    <TouchableHighlight
      underlayColor="grey"
      style={styles.container}
      onPress={onPress}>
      <View style={styles.contactInfo}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <View style={styles.details}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{phone}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  contactInfo: { 
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  avatarPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
},
  details: {
    marginLeft: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    color: 'blue',
  }
});

export default ContactListItem;