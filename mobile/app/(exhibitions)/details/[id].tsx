import { TExhibition } from "@getartway/api/dist/dtos/exhibition.dto";
import { Icon } from "~/components/Icons/Icon";
import { ExhibitionDetailsCarousel } from "~/components/Pages/ExhibitionDetails/Carousel";
import { ExhibitionDetailsHeader } from "~/components/Pages/ExhibitionDetails/Header";
import { ExhibitionDetailsInfos } from "~/components/Pages/ExhibitionDetails/Infos";
import { ExhibitionDetailsNavigation } from "~/components/Pages/ExhibitionDetails/Navigation";
import { ExhibitionDetailsRate } from "~/components/Pages/ExhibitionDetails/Rate";
import { TextButton } from "~/components/UI/TextButton";
import client from "~/hooks/useApiClient";
import { alertNotImplemented } from "~/hooks/useNotImplemented";
import { ArtwayColors } from "~/utils/constants";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

export default function ExhibitionDetails() {
    const { id } = useLocalSearchParams<{ id: string }>();

    const [exhibition, setExhibition] = useState<TExhibition | null>(null);

    useEffect(() => {
        const fetchExhibitionDetails = async () => {
            try {
                const { data } = await client.api.exhibitions({ id }).get();
                if (!data) {
                    throw new Error("Exhibition not found");
                }
                setExhibition(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchExhibitionDetails();
    });

    return (
        <View style={{ flex: 1 }}>
            {exhibition && (
                <>
                    <ExhibitionDetailsNavigation />
                    <ScrollView>
                        <View>
                            <ExhibitionDetailsHeader exhibition={exhibition} />
                            {exhibition.description && (
                                <View style={{ padding: 16 }}>
                                    <Text>{exhibition.description}</Text>
                                </View>
                            )}
                            <ExhibitionDetailsInfos exhibition={exhibition} />
                            <ExhibitionDetailsCarousel
                                exhibition={exhibition}
                            />
                            <ExhibitionDetailsRate />
                        </View>
                    </ScrollView>
                    <TextButton
                        style={{
                            position: "absolute",
                            alignSelf: "center",
                            bottom: 16,
                            right: 16,
                            left: 16,
                        }}
                        onPress={alertNotImplemented}
                    >
                        <Icon name="Ticket" color={ArtwayColors.WHITE} />
                        <Text
                            style={{ color: ArtwayColors.WHITE, fontSize: 16 }}
                        >
                            Réserver
                        </Text>
                    </TextButton>
                </>
            )}
        </View>
    );
}
