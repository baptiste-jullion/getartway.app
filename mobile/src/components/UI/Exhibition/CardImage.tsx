import { TExhibition } from "@getartway/api/src/dtos/exhibition.dto";
import React from "react";
import { Image } from "react-native";

type CardImageProps = Pick<TExhibition, "cover">;

export const CardImage: React.FC<CardImageProps> = ({ cover }) => {
    return (
        <Image
            source={{
                uri: cover,
            }}
            style={{
                aspectRatio: 24 / 9,
                width: "100%",
                borderTopRightRadius: 8,
                borderTopLeftRadius: 8,
            }}
        />
    );
};
