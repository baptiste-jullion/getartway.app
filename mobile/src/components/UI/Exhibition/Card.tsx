import { TExhibition } from "@getartway/api/dist/dtos/exhibition.dto";
import { CardHeadings } from "~/components/UI/Exhibition/CardHeadings";
import { CardImage } from "~/components/UI/Exhibition/CardImage";
import { Tag } from "~/components/UI/Tag";
import React from "react";
import { View } from "react-native";

interface CardProps {
    exhibition: TExhibition;
}

export const Card: React.FC<CardProps> = ({ exhibition }) => {
    return (
        <View>
            <CardImage cover={exhibition.cover} price={exhibition.price} />
            <View
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    width: "100%",
                    backgroundColor: exhibition.category.bgColor,
                    padding: 16,
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                }}
            >
                <CardHeadings
                    title={exhibition.title}
                    category={exhibition.category}
                />
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: 8,
                    }}
                >
                    {exhibition.artists.map((artist) => (
                        <Tag key={artist.id} text={artist.name} icon="Brush" />
                    ))}
                    <Tag
                        icon="MarkerOutlined"
                        text={exhibition.location.city}
                    />
                </View>
            </View>
        </View>
    );
};
