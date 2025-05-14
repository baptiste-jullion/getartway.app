import LayersFilled from "~/components/Icons/LayersFilled";
import MarkerFilled from "~/components/Icons/MarkerFilled";
import NorthFilled from "~/components/Icons/NorthFilled";
import { useMapContext } from "~/contexts/MapContext";
import { usePermissionsContext } from "~/contexts/PermissionsContext";
import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export const MapControls = () => {
    const { cameraInfo, userLocation, setCamera, Layers, setLayerURL } =
        useMapContext();
    const { hasLocationPermission } = usePermissionsContext();

    const [layerVisible, setLayerVisible] = useState(false);

    const onRotateNorth = () =>
        setCamera({
            heading: 0,
        });

    return (
        <View style={styles.actions}>
            <TouchableOpacity onPress={onRotateNorth} style={styles.button}>
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
            <View style={styles.layers}>
                <TouchableOpacity
                    onPress={() => setLayerVisible(!layerVisible)}
                    style={styles.button}
                >
                    <LayersFilled />
                </TouchableOpacity>
                {layerVisible && (
                    <View style={styles.layersRow}>
                        {Object.entries(Layers).map(([key, value]) => (
                            <TouchableOpacity
                                key={key}
                                onPress={() => {
                                    setLayerURL(value.url);
                                    setLayerVisible(false);
                                }}
                                style={styles.buttonImage}
                            >
                                <Image
                                    style={styles.image}
                                    source={value.preview}
                                />
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            </View>
            {hasLocationPermission && userLocation && (
                <TouchableOpacity
                    onPress={async () => {
                        setCamera({
                            centerCoordinate: [
                                userLocation.coords.longitude,
                                userLocation.coords.latitude,
                            ],
                            zoomLevel: 16,
                            animationDuration: 2000,
                        });
                    }}
                    style={styles.button}
                >
                    <MarkerFilled />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    actions: {
        position: "absolute",
        bottom: 10,
        right: 10,
        flexDirection: "column",
        padding: 6,
        gap: 12,
        alignItems: "flex-end",
    },
    button: {
        backgroundColor: "white",
        width: 48,
        height: 48,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    layers: {
        flexDirection: "row-reverse",
        gap: 12,
    },
    layersRow: {
        flex: 1,
        flexDirection: "row-reverse",
        gap: 12,
    },
    image: {
        height: 48,
        aspectRatio: 1,
    },
    buttonImage: {
        borderColor: "white",
        borderWidth: 2,
        width: 48,
        height: 48,
        borderRadius: 16,
        overflow: "hidden",
    },
});
