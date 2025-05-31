import { TExhibition } from "@getartway/api/dist/dtos/exhibition.dto";
import { Shape } from "~/components/Shapes/Shape";
import { Heading } from "~/components/UI/Heading";
import React from "react";
import { Text, View } from "react-native";

type CardHeadingsProps = Pick<TExhibition, "category" | "title">;

export const CardHeadings: React.FC<CardHeadingsProps> = ({
    title,
    category,
}) => {
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
                <Text style={{ fontSize: 14, color: category.fgColor }}>
                    {category.label}
                </Text>
                <Heading headingLevel="h1" style={{ color: category.fgColor }}>
                    {title}
                </Heading>
            </View>
        </View>
    );
};
