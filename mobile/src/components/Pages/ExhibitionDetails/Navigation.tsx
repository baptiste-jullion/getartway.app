import { Icon } from "~/components/Icons/Icon";
import { Button } from "~/components/UI/Button";
import { alertNotImplemented } from "~/hooks/useNotImplemented";
import { useRouter } from "expo-router";
import { View } from "react-native";

export const ExhibitionDetailsNavigation = () => {
    const router = useRouter();

    return (
        <View
            style={{
                padding: 16,
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
            }}
        >
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
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "auto",
                    gap: 10,
                }}
            >
                <Button onPress={alertNotImplemented}>
                    <Icon name="Send" />
                </Button>
                <Button onPress={alertNotImplemented}>
                    <Icon name="HeartOutlined" />
                </Button>
            </View>
        </View>
    );
};
