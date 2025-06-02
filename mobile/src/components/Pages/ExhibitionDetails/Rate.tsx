import { Heading } from "~/components/UI/Heading";
import { ArtwayColors } from "~/utils/constants";
import { useState } from "react";
import { View } from "react-native";
import StarRating from "react-native-star-rating-widget";

const Criterias = [
    "Accessibilité",
    "Pertinence et intérêt culturel",
    "Contenu et qualité artistique",
    "Accueil et organisation",
];

export const ExhibitionDetailsRate = () => {
    const [rating, setRating] = useState([0, 0, 0, 0]);

    return (
        <View style={{ padding: 16 }}>
            <Heading headingLevel="h2">Noter l'exposition</Heading>
            <View>
                {Criterias.map((criteria, index) => (
                    <View
                        key={index}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 8,
                        }}
                    >
                        <Heading
                            headingLevel="h3"
                            style={{
                                marginTop: 16,
                                marginBottom: 8,
                                flexShrink: 1,
                            }}
                        >
                            {criteria}
                        </Heading>
                        <StarRating
                            style={{ flexShrink: 0 }}
                            rating={rating[index]}
                            onChange={(newRating) => {
                                const newRatings = [...rating];
                                newRatings[index] = newRating;
                                setRating(newRatings);
                            }}
                            starSize={24}
                            maxStars={5}
                            color={ArtwayColors.BLACK}
                        />
                    </View>
                ))}
            </View>
        </View>
    );
};
