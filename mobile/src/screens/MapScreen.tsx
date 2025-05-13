import { treaty } from "@elysiajs/eden";
import type { App } from "@getartway/api";
import MapboxGL from "@rnmapbox/maps";
import { Camera } from "~/components/Map/Camera";
import { MapControls } from "~/components/Map/MapControls";
import { RegionLayer } from "~/components/Map/RegionLayer";
import { UserLocation } from "~/components/Map/UserLocation";
import { useMapContext } from "~/contexts/MapContext";
import { usePermissionsContext } from "~/contexts/PermissionsContext";
import { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

const client = treaty<App>("http://192.168.1.96:15336");

const MAPBOX_PUBLIC_TOKEN =
    "pk.eyJ1IjoiYXJ0d2F5IiwiYSI6ImNtOWZ1c2hzcDF2MW4ybnM0MGZ0NzNhNjcifQ.zwBRMxwfbQMt3oAXgKyEnw";

MapboxGL.setAccessToken(MAPBOX_PUBLIC_TOKEN);

export const MapScreen = () => {
    const { mapRef, setCameraInfo, cameraInfo, setIsMapLoaded, isMapLoaded } =
        useMapContext();

    const { hasLocationPermission } = usePermissionsContext();

    const handleCameraChange = (state: MapboxGL.MapState) => {
        setCameraInfo(state.properties);
    };

    const layers = [
        MapboxGL.StyleURL.SatelliteStreet,
        MapboxGL.StyleURL.Street,
        MapboxGL.StyleURL.TrafficNight,
    ];

    const [layer, setLayer] = useState(layers[0]);

    const cycleMapStyle = () => {
        const currentIndex = layers.indexOf(layer);
        const nextIndex = (currentIndex + 1) % layers.length;
        setLayer(layers[nextIndex]);
    };

    return (
        <View style={styles.page}>
            <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
            <MapboxGL.MapView
                ref={mapRef}
                style={styles.map}
                styleURL={layer}
                onDidFinishLoadingMap={() => setIsMapLoaded(true)}
                onCameraChanged={(state) => handleCameraChange(state)}
                onMapLoadingError={() => console.error("Map failed loading:")} // Added fallback for error message
            >
                <Camera />
                <RegionLayer />
                {hasLocationPermission && <UserLocation />}

                {/*{mapLoaded && exhibition && MapboxGL.PointAnnotation && (*/}
                {/*    <MapboxGL.PointAnnotation*/}
                {/*        id={exhibition.id}*/}
                {/*        coordinate={exhibition.location}*/}
                {/*    >*/}
                {/*        <View*/}
                {/*            style={{*/}
                {/*                alignItems: "center",*/}
                {/*                justifyContent: "center",*/}
                {/*            }}*/}
                {/*        >*/}
                {/*            <Image*/}
                {/*                source={{*/}
                {/*                    uri:*/}
                {/*                        "http://192.168.1.96:15336/api/medias/" +*/}
                {/*                        exhibition.cover,*/}
                {/*                }}*/}
                {/*                style={styles.imageMarker}*/}
                {/*                onError={(e) =>*/}
                {/*                    console.error(*/}
                {/*                        "Error loading image:",*/}
                {/*                        e.nativeEvent.error,*/}
                {/*                    )*/}
                {/*                }*/}
                {/*            />*/}
                {/*        </View>*/}
                {/*    </MapboxGL.PointAnnotation>*/}
                {/*)}*/}
            </MapboxGL.MapView>

            {cameraInfo && <MapControls onMapLayerChange={cycleMapStyle} />}
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
