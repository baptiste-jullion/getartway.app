import { TExhibition } from "@getartway/api/dist/dtos/exhibition.dto";
import { ExhibitionDetailsHeader } from "~/components/Pages/ExhibitionDetails/Header";
import { ExhibitionDetailsNavigation } from "~/components/Pages/ExhibitionDetails/Navigation";
import client from "~/hooks/useApiClient";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

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
        <View style={{ flex: 1, position: "relative" }}>
            {exhibition && (
                <View>
                    <ExhibitionDetailsNavigation />
                    <ExhibitionDetailsHeader exhibition={exhibition} />
                    <View style={{ padding: 16 }}>
                        <Text>{exhibition.description}</Text>
                        <Text>{JSON.stringify(exhibition)}</Text>
                    </View>
                </View>
            )}
        </View>
    );
}
