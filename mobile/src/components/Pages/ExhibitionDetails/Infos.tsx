import { TExhibition } from "@getartway/api/dist/dtos/exhibition.dto";
import { Heading } from "~/components/UI/Heading";
import { Linking, Text, TouchableOpacity, View } from "react-native";

interface ExhibitionDetailsInfosProps {
    exhibition: TExhibition;
}

export const ExhibitionDetailsInfos: React.FC<ExhibitionDetailsInfosProps> = ({
    exhibition,
}) => {
    const openMap = () => {
        const url = `geo:${exhibition.location.lat},${exhibition.location.lng}?q=${exhibition.location.lat},${exhibition.location.lng}(${exhibition.location.address})`;
        Linking.openURL(url).catch((err) =>
            console.error("An error occurred", err),
        );
    };

    return (
        <View style={{ padding: 16, gap: 16 }}>
            <View>
                <Heading headingLevel="h2">Dates</Heading>
                {exhibition.startDate && (
                    <Text>
                        Début :&nbsp;
                        {new Date(exhibition.startDate).toLocaleString(
                            "fr-FR",
                            {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            },
                        )}
                    </Text>
                )}
                {exhibition.endDate && (
                    <Text>
                        Fin :&nbsp;
                        {new Date(exhibition.endDate).toLocaleString("fr-FR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        })}
                    </Text>
                )}
            </View>
            <View>
                <Heading headingLevel="h2">Prix</Heading>
                {
                    <Text>
                        {exhibition.price
                            ? `Prix : ${exhibition.price} €`
                            : "Gratuit"}
                    </Text>
                }
            </View>
            <View>
                <Heading headingLevel="h2">Adresse</Heading>
                <TouchableOpacity onPress={openMap}>
                    {<Text>{exhibition.location.address}</Text>}
                </TouchableOpacity>
            </View>
        </View>
    );
};
