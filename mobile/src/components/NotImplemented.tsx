import { Heading } from "~/components/UI/Heading";
import { TextButton } from "~/components/UI/TextButton";
import { ArtwayColors } from "~/utils/constants";
import { useRouter } from "expo-router";
import React from "react";
import { ImageBackground, Text, View } from "react-native";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const bg = require("~/assets/bg_placeholder.png");

export default function NotImplemented() {
    const router = useRouter();

    return (
        <ImageBackground
            source={bg}
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
            resizeMode="repeat"
        >
            <View
                style={{
                    padding: 24,
                    backgroundColor: "#fff",
                    borderRadius: 16,
                }}
            >
                <Heading headingLevel={"h1"} style={{ textAlign: "center" }}>
                    Cette fonctionnalité n'est pas encore disponible
                </Heading>

                <TextButton
                    style={{ marginTop: 24 }}
                    onPress={() => router.push("/(tabs)/explore")}
                >
                    <Text style={{ color: ArtwayColors.WHITE, fontSize: 16 }}>
                        Explorer les expositions
                    </Text>
                </TextButton>
            </View>
        </ImageBackground>
    );
}
