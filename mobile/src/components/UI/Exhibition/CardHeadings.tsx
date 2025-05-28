import {
    FunnelDisplay_700Bold,
    useFonts,
} from "@expo-google-fonts/funnel-display";
import { TExhibition } from "@getartway/api/dist/dtos/exhibition.dto";
import { Shape } from "~/components/Shapes/Shape";
import React from "react";
import { Text, View } from "react-native";

type CardHeadingsProps = Pick<TExhibition, "category" | "title">;

export const CardHeadings: React.FC<CardHeadingsProps> = ({
    title,
    category,
}) => {
    const [fontsLoaded] = useFonts({
        FunnelDisplay_700Bold,
    });

    return (
        <View
            style={{
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
            }}
        >
            <Shape name={category.icon} width={30} height={30} />
            <View
                style={{
                    flexShrink: 1,
                }}
            >
                <Text
                    style={{
                        fontSize: 14,
                        color: category.fgColor,
                    }}
                >
                    {category.label}
                </Text>
                <Text
                    style={{
                        fontSize: 20,
                        color: category.fgColor,
                        fontFamily: fontsLoaded
                            ? "FunnelDisplay_700Bold"
                            : undefined,
                    }}
                >
                    {title}
                </Text>
            </View>
        </View>
    );
};
