import { TExhibition } from "@getartway/api/dist/dtos/exhibition.dto";
import { CardHeadings } from "~/components/UI/Exhibition/CardHeadings";
import { CardImage } from "~/components/UI/Exhibition/CardImage";
import { Tag } from "~/components/UI/Tag";
import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";
import { useSheetRef } from "react-native-actions-sheet";

interface CardProps {
    exhibition: TExhibition;
}

export const Card: React.FC<CardProps> = ({ exhibition }) => {
    const sheetRef = useSheetRef();

    return (
        <View>
            <Link
                href={{
                    pathname: "/(exhibitions)/details/[id]",
                    params: { id: exhibition.id },
                }}
                onPress={() => sheetRef.current.hide()}
            >
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
                            <Tag
                                key={artist.id}
                                text={artist.name}
                                icon="Brush"
                            />
                        ))}
                        <Tag
                            icon="MarkerOutlined"
                            text={exhibition.location.city}
                        />
                    </View>
                </View>
            </Link>
        </View>
    );
};
