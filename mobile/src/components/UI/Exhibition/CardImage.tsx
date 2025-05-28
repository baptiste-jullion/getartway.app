import { TExhibition } from "@getartway/api/dist/dtos/exhibition.dto";
import { Tag } from "~/components/UI/Tag";
import React from "react";
import { Image, View } from "react-native";

type CardImageProps = Pick<TExhibition, "cover" | "price">;

export const CardImage: React.FC<CardImageProps> = ({ cover, price }) => {
    return (
        <View style={{ position: "relative" }}>
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
            <Tag
                icon="Ticket"
                text={price ? `${price}€` : "Gratuit"}
                style={{
                    position: "absolute",
                    left: 16,
                    top: 16,
                }}
            />
        </View>
    );
};
