import Constants from "expo-constants";
import { StyleSheet, Text, View } from "react-native";

export default function IndexTab() {
    return (
        <View style={styles.container}>
            <Text>{JSON.stringify(Constants.expoConfig?.extra)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
