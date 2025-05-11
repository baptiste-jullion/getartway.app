import ARAGeoJson from "./assets/geojson/ara.json";
import { treaty } from "@elysiajs/eden";
import type { App } from "@getartway/api";
import MapboxGL from "@rnmapbox/maps";
import LayersFilled from "~/components/Icons/LayersFilled";
import NorthFilled from "~/components/Icons/NorthFilled";
import { useRef, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

const client = treaty<App>("http://192.168.1.96:15336");

const MAPBOX_PUBLIC_TOKEN =
    "pk.eyJ1IjoiYXJ0d2F5IiwiYSI6ImNtOWZ1c2hzcDF2MW4ybnM0MGZ0NzNhNjcifQ.zwBRMxwfbQMt3oAXgKyEnw";

MapboxGL.setAccessToken(MAPBOX_PUBLIC_TOKEN);

export default function App() {
    const markerCoordinate = [6.11667, 45.900002];

    const cameraRef = useRef<MapboxGL.Camera>(null);
    const mapRef = useRef<MapboxGL.MapView>(null);

    const [cameraInfo, setCameraInfo] = useState<
        MapboxGL.MapState["properties"] | null
    >(null);

    const handleCameraChange = (state: MapboxGL.MapState) => {
        const { properties } = state;

        setCameraInfo(properties);
    };

    const [exhibition, setExhibition] = useState<any>(null);

    const testApi = async () => {
        console.log("test");
        try {
            const { data } = await client.api.exhibitions.index.get();
            if (!data) return;
            setExhibition(data[0]);
            console.log(data);
        } catch (error) {
            console.error("Error fetching data from API:", error);
        }
    };

    const layers = [
        MapboxGL.StyleURL.SatelliteStreet,
        MapboxGL.StyleURL.Street,
        MapboxGL.StyleURL.TrafficNight,
    ];

    const [mapLoaded, setMapLoaded] = useState(false);

    const [layer, setLayer] = useState(layers[0]);

    const cycleMapStyle = () => {
        const currentIndex = layers.indexOf(layer);
        const nextIndex = (currentIndex + 1) % layers.length;
        setLayer(layers[nextIndex]);
    };

    return (
        <View style={styles.page}>
            <MapboxGL.MapView
                ref={mapRef}
                style={styles.map}
                styleURL={layer} // Use a standard style
                onDidFinishLoadingMap={() => {
                    console.log("Map finished loading.");
                    setMapLoaded(true);
                }}
                onCameraChanged={(state) => handleCameraChange(state)}
                onMapLoadingError={() => console.error("Map failed loading:")} // Added fallback for error message
            >
                {MapboxGL.Camera && (
                    <MapboxGL.Camera
                        ref={cameraRef}
                        centerCoordinate={markerCoordinate}
                        minZoomLevel={8}
                        maxZoomLevel={16}
                        maxBounds={{
                            ne: [7.18556 + 0.25, 46.80417 + 0.25],
                            sw: [2.06278 - 0.25, 44.11556 - 0.25],
                        }}
                    />
                )}
                {MapboxGL.ShapeSource && (
                    <MapboxGL.ShapeSource
                        id="region"
                        shape={ARAGeoJson as GeoJSON.Feature}
                    >
                        <MapboxGL.LineLayer
                            id="region-outline"
                            style={{
                                lineColor: "#007AFF",
                                lineWidth: 8,
                                lineOpacity: 0.8,
                            }}
                        />
                    </MapboxGL.ShapeSource>
                )}
                {mapLoaded && exhibition && MapboxGL.PointAnnotation && (
                    <MapboxGL.PointAnnotation
                        id={exhibition.id}
                        coordinate={exhibition.location}
                    >
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Image
                                source={{
                                    uri:
                                        "http://192.168.1.96:15336/api/medias/" +
                                        exhibition.cover,
                                }}
                                style={styles.imageMarker}
                                onError={(e) =>
                                    console.error(
                                        "Error loading image:",
                                        e.nativeEvent.error,
                                    )
                                }
                            />
                        </View>
                    </MapboxGL.PointAnnotation>
                )}
            </MapboxGL.MapView>

            <View style={styles.actions}>
                <TouchableOpacity
                    onPress={() => cameraRef.current?.setCamera({ heading: 0 })}
                    style={styles.button}
                >
                    <NorthFilled
                        style={{
                            transform: [
                                {
                                    rotateZ: `${cameraInfo?.heading || 0}deg`,
                                },
                            ],
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => cycleMapStyle()}
                    style={styles.button}
                >
                    <LayersFilled style={{}} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => testApi()}
                    style={styles.button}
                ></TouchableOpacity>
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
