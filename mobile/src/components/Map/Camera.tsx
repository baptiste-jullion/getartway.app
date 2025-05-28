import MapboxGL from "@rnmapbox/maps";
import { useMapContext } from "~/contexts/MapContext";
import { LocationsConstants } from "~/utils/constants";
import React from "react";

export const Camera = () => {
    const { cameraRef } = useMapContext();

    return (
        <MapboxGL.Camera
            ref={cameraRef}
            defaultSettings={{
                centerCoordinate: LocationsConstants.ANNECY,
            }}
            maxZoomLevel={16}
            maxBounds={{
                ne: LocationsConstants.ARA_MAX_NE,
                sw: LocationsConstants.ARA_MAX_SW,
            }}
        />
    );
};
