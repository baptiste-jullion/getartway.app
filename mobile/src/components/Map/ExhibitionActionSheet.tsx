import {
    FunnelDisplay_700Bold,
    useFonts,
} from "@expo-google-fonts/funnel-display";
import { TExhibition } from "@getartway/api/dist/dtos/exhibition.dto";
import { Card } from "~/components/UI/Exhibition/Card";
import client from "~/hooks/useApiClient";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import ActionSheet, { SheetProps } from "react-native-actions-sheet";

type ExhibitionActionSheetProps = SheetProps<"exhibition-sheet">;

export const ExhibitionActionSheet: React.FC<ExhibitionActionSheetProps> = ({
    payload,
}) => {
    const [exhibition, setExhibition] = useState<TExhibition | null>(null);

    const [fontsLoaded] = useFonts({
        FunnelDisplay_700Bold,
    });

    useEffect(() => {
        const fetchExhibition = async () => {
            if (!payload?.exhibitionId) {
                return;
            }
            try {
                const { data } = await client.api
                    .exhibitions({ id: payload.exhibitionId })
                    .get();
                setExhibition(data);
            } catch (e) {}
        };
        fetchExhibition();
    }, [payload?.exhibitionId]);

    return (
        <ActionSheet gestureEnabled>
            <View style={{ padding: 24, height: "auto" }}>
                {exhibition && <Card exhibition={exhibition} />}
            </View>
        </ActionSheet>
    );
};
