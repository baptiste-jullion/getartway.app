import MapboxGL from "@rnmapbox/maps";
import { useRef, useState } from "react";
import { Button, Image, StyleSheet, View } from "react-native";

const MAPBOX_PUBLIC_TOKEN =
    "pk.eyJ1IjoiYXJ0d2F5IiwiYSI6ImNtOWZ1c2hzcDF2MW4ybnM0MGZ0NzNhNjcifQ.zwBRMxwfbQMt3oAXgKyEnw";

MapboxGL.setAccessToken(MAPBOX_PUBLIC_TOKEN);

export default function App() {
    const markerCoordinate = [6.11667, 45.900002];

    const cameraRef = useRef<MapboxGL.Camera>(null);

    const layers = [
        MapboxGL.StyleURL.SatelliteStreet,
        MapboxGL.StyleURL.Street,
        MapboxGL.StyleURL.TrafficNight,
    ];

    const [layer, setLayer] = useState(layers[0]);

    return (
        <View style={styles.page}>
            <MapboxGL.MapView
                style={styles.map}
                styleURL={layer} // Use a standard style
                onDidFinishLoadingMap={() =>
                    console.log("Map finished loading.")
                }
                onMapLoadingError={() => console.error("Map failed loading:")} // Added fallback for error message
            >
                {MapboxGL.Camera && (
                    <MapboxGL.Camera
                        ref={cameraRef}
                        centerCoordinate={markerCoordinate}
                        minZoomLevel={8}
                        maxZoomLevel={16}
                    />
                )}
                {MapboxGL.PointAnnotation && (
                    <MapboxGL.PointAnnotation
                        id="nycMarker"
                        coordinate={markerCoordinate}
                    >
                        <Image
                            source={{
                                uri: "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
                            }}
                            style={styles.imageMarker}
                            fadeDuration={0}
                        />

                        <MapboxGL.Callout title="Hello from NYC!" />
                    </MapboxGL.PointAnnotation>
                )}
            </MapboxGL.MapView>

            <View style={styles.actions}>
                <Button
                    title={"north"}
                    onPress={() => cameraRef.current?.setCamera({ heading: 0 })}
                />
            </View>
            <View style={styles.overlay}>
                <Button title={"1"} onPress={() => setLayer(layers[0])} />
                <Button title={"2"} onPress={() => setLayer(layers[1])} />
                <Button title={"3"} onPress={() => setLayer(layers[2])} />
            </View>
        </View>
    );
}

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
        width: 150, // Set desired width
        height: 150, // Set desired height
        resizeMode: "contain", // Adjust how the image fits
    },
    overlay: {
        position: "absolute",
        left: 10,
        top: 10,
    },
    actions: {
        position: "absolute",
        bottom: 10,
        left: 10,
        flexDirection: "column",
        padding: 6,
        gap: 12,
    },
});
