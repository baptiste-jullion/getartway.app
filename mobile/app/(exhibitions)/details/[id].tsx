import { Icon } from "~/components/Icons/Icon";
import { Button } from "~/components/UI/Button";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function ExhibitionDetails() {
    const params = useLocalSearchParams();
    const router = useRouter();

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <Button
                onPress={() =>
                    router.canGoBack()
                        ? router.back()
                        : router.navigate("/(tabs)/explore")
                }
            >
                <Icon
                    name="Chevron"
                    style={{ transform: [{ rotate: "180deg" }] }}
                />
            </Button>
            <Text>{JSON.stringify(params, null, 2)}</Text>
        </View>
    );
}
