import { Alert, Button, View , Text} from "react-native";
import styles from "./style";

function ClickOnSquare(value){
    Alert.alert(value)
}

export default Square = ({text}) => (
    <View style={[styles.box, { backgroundColor: "#7ce0f9" }]}>
        <Text>{text}</Text>
        <Button title = 'Click' onPress={() => ClickOnSquare(text)}></Button>
    </View>
);