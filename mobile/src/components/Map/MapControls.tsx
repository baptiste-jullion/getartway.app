import { Icon } from "~/components/Icons/Icon";
import { Button } from "~/components/UI/Button";
import { useMapContext } from "~/contexts/MapContext";
import { usePermissionsContext } from "~/contexts/PermissionsContext";
import { ArtwayColors } from "~/utils/constants";
import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";

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
            <Button onPress={onRotateNorth}>
                <Icon
                    name="NorthFilled"
                    style={{
                        transform: [
                            {
                                rotateZ: `${cameraInfo?.heading || 0}deg`,
                            },
                        ],
                    }}
                    color={ArtwayColors.BLACK}
                />
            </Button>
            <View style={styles.layers}>
                <Button onPress={() => setLayerVisible(!layerVisible)}>
                    <Icon name="LayersFilled" color={ArtwayColors.BLACK} />
                </Button>
                {layerVisible && (
                    <View style={styles.layersRow}>
                        {Object.entries(Layers).map(([key, value]) => (
                            <Button
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
                            </Button>
                        ))}
                    </View>
                )}
            </View>
            {hasLocationPermission && userLocation && (
                <Button
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
                >
                    <Icon name="MarkerFilled" color={ArtwayColors.BLACK} />
                </Button>
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
        borderRadius: 16,
        overflow: "hidden",
    },
});
