import { TExhibition } from "@getartway/api/src/dtos/exhibition.dto";
import { CardHeadings } from "~/components/UI/Exhibition/CardHeadings";
import { Tag } from "~/components/UI/Tag";
import React from "react";
import { View } from "react-native";

type CardDetailsProps = Pick<TExhibition, "title" | "category" | "location">;

export const CardDetails: React.FC<CardDetailsProps> = ({
    title,
    category,
    location,
}) => {
    return (
        <View
            style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                width: "100%",
                backgroundColor: category.bgColor,
                padding: 16,
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
            }}
        >
            <CardHeadings title={title} category={category} />
            <Tag icon="MarkerOutlined" text={location.city} />
        </View>
    );
};
