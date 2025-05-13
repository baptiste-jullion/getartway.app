import LayersFilled from "~/components/Icons/LayersFilled";
import MarkerFilled from "~/components/Icons/MarkerFilled";
import NorthFilled from "~/components/Icons/NorthFilled";
import { useMapContext } from "~/contexts/MapContext";
import { usePermissionsContext } from "~/contexts/PermissionsContext";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface MapControlsProps {
    onMapLayerChange: () => void;
}

export const MapControls: React.FC<MapControlsProps> = ({
    onMapLayerChange,
}) => {
    const { cameraInfo, userLocation, setCamera } = useMapContext();
    const { requestLocationPermission, hasLocationPermission } =
        usePermissionsContext();

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
            <TouchableOpacity
                onPress={() => onMapLayerChange()}
                style={styles.button}
            >
                <LayersFilled style={{}} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={async () => {
                    if (!hasLocationPermission)
                        await requestLocationPermission();

                    if (userLocation) {
                        setCamera({
                            centerCoordinate: [
                                userLocation.coords.longitude,
                                userLocation.coords.latitude,
                            ],
                            zoomLevel: 16,
                            animationDuration: 2000,
                        });
                    }
                }}
                style={styles.button}
            >
                <MarkerFilled />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
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
