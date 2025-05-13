import MapboxGL from "@rnmapbox/maps";
import ARAGeoJson from "~/assets/geojson/ara.json";
import { GeoJSON } from "geojson";
import React from "react";

export const RegionLayer = () => {
    return (
        <MapboxGL.ShapeSource id="region" shape={ARAGeoJson as GeoJSON.Feature}>
            <MapboxGL.LineLayer
                id="region-outline"
                style={{
                    lineColor: "#007AFF",
                    lineWidth: 8,
                    lineOpacity: 0.8,
                }}
            />
        </MapboxGL.ShapeSource>
    );
};
