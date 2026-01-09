import { View } from "react-native";

export default AppUI = () => {
    const [pressCount, setPressCount] = useState(0);

    return(
        <View style={{alignItems: "center", marginTop: 20}}>
            <Text>You've passed the button: {pressCount} time(s)</Text>
            <Button title="Press me" onPress={() => setPressCount(pressCount + 1)}></Button>
        </View>
    )
}