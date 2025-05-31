import { TExhibition } from "@getartway/api/dist/dtos/exhibition.dto";
import { Pattern } from "~/components/Patterns/Pattern";
import { Heading } from "~/components/UI/Heading";
import { Tag } from "~/components/UI/Tag";
import React from "react";
import { Image, Text, View } from "react-native";

interface ExhibitionDetailsHeaderProps {
    exhibition: TExhibition;
}

export const ExhibitionDetailsHeader: React.FC<
    ExhibitionDetailsHeaderProps
> = ({ exhibition: { artists, category, location, price, title, cover } }) => {
    return (
        <>
            <Image
                style={{
                    width: "100%",
                    height: 220,
                    resizeMode: "cover",
                }}
                source={{ uri: cover }}
            />
            <View
                style={{
                    paddingLeft: 16,
                    paddingBottom: 16,
                    display: "flex",
                    backgroundColor: category.bgColor,
                }}
            >
                <View
                    style={{ display: "flex", flexDirection: "row", gap: 16 }}
                >
                    <View
                        style={{
                            display: "flex",
                            width: "55%",
                        }}
                    >
                        <Text style={{ color: category.fgColor, marginTop: 8 }}>
                            {category.label}
                        </Text>
                        <Heading
                            headingLevel="h1"
                            style={{ color: category.fgColor }}
                        >
                            {title}
                        </Heading>
                    </View>
                    <Pattern name={category.icon} />
                </View>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                        marginTop: 10,
                        flexWrap: "wrap",
                        marginRight: 16,
                    }}
                >
                    <Tag icon="Ticket" text={price ? `${price}€` : "Gratuit"} />
                    <Tag icon="MarkerOutlined" text={location.city} />
                </View>
            </View>
        </>
    );
};
