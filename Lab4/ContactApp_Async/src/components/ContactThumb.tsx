import { StyleSheet, View,Text , TouchableOpacity, Image, ViewStyle } from "react-native";
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// như một lớp validate đầu vào do sẽ báo nếu dữ liệu khác với lớp đã định nghĩa
interface Props {
    name?: string;
    phone?: string;
    avatar?: string;
    avatarSize: number;
    onPress?: () => void;
    style?: ViewStyle;
    textColor?: string;
}

const ContactThumb = ({ name, phone, avatar, textColor, onPress, avatarSize } : Props) => {
  const ImageContact = onPress ? TouchableOpacity : View;

  return (
    <View style={styles.container}>
      <ImageContact onPress={onPress}>
        <Image
          source={{
            uri: avatar,
          }}
          style={[
            styles.image, 
            { 
              width: avatarSize, 
              height: avatarSize, 
              borderRadius: avatarSize / 2 
            }
          ]}
        />
      </ImageContact>

      {name !== '' && (
        <Text style={[styles.text, { color: textColor }]}>{name}</Text>
      )}
      {phone !== '' && (
        <Text style={[styles.text, { color: textColor }]}>{phone}</Text>
      )}
    </View>
  );
};

ContactThumb.defaultProps = {
  name: '',
  phone: '',
  textColor: 'white',
  onPress: null,
  avatarSize: 100,
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue', 
  },
  text: {
    fontSize: 20,
    marginTop: 24,
    marginBottom: 2,
    fontWeight: 'bold',
  },
});

export default ContactThumb;