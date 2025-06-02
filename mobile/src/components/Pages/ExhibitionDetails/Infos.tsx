import { TExhibition } from "@getartway/api/dist/dtos/exhibition.dto";
import { Heading } from "~/components/UI/Heading";
import { Text, View } from "react-native";

interface ExhibitionDetailsInfosProps {
    exhibition: TExhibition;
}

export const ExhibitionDetailsInfos: React.FC<ExhibitionDetailsInfosProps> = ({
    exhibition,
}) => {
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
                {<Text>{exhibition.location.address}</Text>}
            </View>
        </View>
    );
};
