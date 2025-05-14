import MapboxGL from "@rnmapbox/maps";
import { useMapContext } from "~/contexts/MapContext";
import React from "react";

export const UserLocation = () => {
    const { setUserLocation } = useMapContext();

    return (
        <>
            {
                <MapboxGL.UserLocation
                    visible={true}
                    showsUserHeadingIndicator={true}
                    onUpdate={(location) => setUserLocation(location)}
                />
            }
        </>
    );
};
