import { TExhibitionList } from "@getartway/api/src/dtos/exhibition.dto";
import MapboxGL from "@rnmapbox/maps";
import { Camera } from "~/components/Map/Camera";
import { ExhibitionAnnotation } from "~/components/Map/ExhibitionAnnotation";
import { MapControls } from "~/components/Map/MapControls";
import { RegionLayer } from "~/components/Map/RegionLayer";
import { UserLocation } from "~/components/Map/UserLocation";
import { useMapContext } from "~/contexts/MapContext";
import { usePermissionsContext } from "~/contexts/PermissionsContext";
import client from "~/hooks/useApiClient";
import Constants from "expo-constants";
import { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

MapboxGL.setAccessToken(Constants.expoConfig?.extra?.MAPBOX_PUBLIC_KEY);

export const MapScreen = () => {
    const { mapRef, setCameraInfo, cameraInfo, setIsMapLoaded, layerURL } =
        useMapContext();

    const { hasLocationPermission } = usePermissionsContext();

    const handleCameraChange = (state: MapboxGL.MapState) => {
        setCameraInfo(state.properties);
    };

    const [exhibitions, setExhibitions] = useState<TExhibitionList[]>([]);

    const fetchExhibitions = async () => {
        try {
            const { data } = await client.api.exhibitions.get();
            if (!data) {
                throw new Error("No exhibitions found");
            }
            setExhibitions(data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <View style={styles.page}>
            <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
            <MapboxGL.MapView
                ref={mapRef}
                style={styles.map}
                styleURL={layerURL}
                onDidFinishLoadingMap={() => {
                    setIsMapLoaded(true);
                    fetchExhibitions();
                }}
                onCameraChanged={(state) => handleCameraChange(state)}
                onMapLoadingError={() => console.error("Map failed loading:")} // Added fallback for error message
            >
                <Camera />
                <RegionLayer />
                {hasLocationPermission && <UserLocation />}
                {exhibitions.map((exhibition) => (
                    <ExhibitionAnnotation
                        key={exhibition.id}
                        exhibition={exhibition}
                    />
                ))}
            </MapboxGL.MapView>

            {cameraInfo && <MapControls />}
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eee",
    },
    map: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    annotationContainer: {
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 15, // Make it circular
        borderColor: "rgba(0, 0, 255, 0.7)", // Blue border
        borderWidth: 2,
    },
    annotationFill: {
        width: 120,
        height: 120,
        borderRadius: 60, // Inner circle
        backgroundColor: "rgba(0, 0, 255, 0.7)", // Blue fill
        transform: [{ scale: 0.8 }],
    },
    imageMarker: {
        width: 60, // Set desired width
        aspectRatio: 16 / 9,
        borderRadius: 10,
        resizeMode: "cover",
        borderColor: "red",
        borderWidth: 2,
        borderStyle: "solid",
    },
    overlay: {
        position: "absolute",
        left: 10,
        top: 10,
    },
    actions: {
        position: "absolute",
        bottom: 10,
        right: 10,
        flexDirection: "column",
        padding: 6,
        gap: 12,
    },
    button: {
        backgroundColor: "white",
        padding: 12,
        borderRadius: 50,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
