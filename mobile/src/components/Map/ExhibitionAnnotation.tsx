import type { TExhibitionList } from "@getartway/api/src/dtos/exhibition.dto";
import MapboxGL from "@rnmapbox/maps";
import { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";

interface ExhibitionAnnotationProps {
    exhibition: TExhibitionList;
}

export const ExhibitionAnnotation = ({
    exhibition,
}: ExhibitionAnnotationProps) => {
    const imageUri = exhibition.cover;
    const [imageReady, setImageReady] = useState(false);

    useEffect(() => {
        Image.prefetch(imageUri).then(() => setImageReady(true));
    }, [imageUri]);
    return (
        <MapboxGL.PointAnnotation
            id={exhibition.id}
            coordinate={[exhibition.location.lng, exhibition.location.lat]}
        >
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {imageReady && (
                    <Image
                        key={exhibition.id}
                        source={{ uri: imageUri }}
                        style={styles.imageMarker}
                    />
                )}
            </View>
        </MapboxGL.PointAnnotation>
    );
};

const styles = StyleSheet.create({
    imageMarker: {
        width: 60,
        aspectRatio: 16 / 9,
        borderRadius: 10,
        resizeMode: "cover",
        borderColor: "white",
        borderWidth: 2,
        borderStyle: "solid",
    },
});
