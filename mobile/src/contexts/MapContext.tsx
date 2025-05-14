import MapboxGL, { Camera } from "@rnmapbox/maps";
import React, {
    createContext,
    Dispatch,
    ReactNode,
    RefObject,
    SetStateAction,
    useContext,
    useRef,
    useState,
} from "react";

interface MapContextType {
    mapRef: RefObject<MapboxGL.MapView>;
    cameraRef: RefObject<MapboxGL.Camera>;

    cameraInfo: MapboxGL.MapState["properties"] | null;
    setCameraInfo: Dispatch<MapContextType["cameraInfo"]>;

    isMapLoaded: boolean;
    setIsMapLoaded: Dispatch<SetStateAction<MapContextType["isMapLoaded"]>>;

    userLocation: MapboxGL.Location | null;
    setUserLocation: Dispatch<SetStateAction<MapContextType["userLocation"]>>;

    setCamera: Camera["setCamera"];

    layerURL: string;
    setLayerURL: Dispatch<SetStateAction<MapContextType["layerURL"]>>;

    Layers: typeof Layers;
}

const Layers = {
    Satellite: {
        url: "mapbox://styles/mapbox/satellite-streets-v12",
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        preview: require("~/assets/map-layers/satellite.png"),
    },
    Street: {
        url: "mapbox://styles/mapbox/streets-v12",
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        preview: require("~/assets/map-layers/street.png"),
    },
    Night: {
        url: "mapbox://styles/mapbox/navigation-preview-night-v4",
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        preview: require("~/assets/map-layers/night.png"),
    },
} as const;

const MapContext = createContext<MapContextType | null>(null);

export const MapProvider = ({ children }: { children: ReactNode }) => {
    const mapRef = useRef<MapboxGL.MapView>(null);
    const cameraRef = useRef<MapboxGL.Camera>(null);

    const [cameraInfo, setCameraInfo] =
        useState<MapContextType["cameraInfo"]>(null);

    const [isMapLoaded, setIsMapLoaded] =
        useState<MapContextType["isMapLoaded"]>(false);

    const [userLocation, setUserLocation] =
        useState<MapContextType["userLocation"]>(null);

    const [layerURL, setLayerURL] = useState<MapContextType["layerURL"]>(
        Layers.Satellite.url,
    );

    const setCamera: Camera["setCamera"] = (camera) => {
        if (cameraRef.current) cameraRef.current.setCamera(camera);
    };

    return (
        <MapContext.Provider
            value={{
                mapRef,
                cameraRef,
                cameraInfo,
                setCameraInfo,
                isMapLoaded,
                setIsMapLoaded,
                userLocation,
                setUserLocation,
                setCamera,
                layerURL,
                setLayerURL,
                Layers,
            }}
        >
            {children}
        </MapContext.Provider>
    );
};

export const useMapContext = () => {
    const context = useContext(MapContext);
    if (!context)
        throw new Error("useMapContext must be used within a MapProvider");

    return context;
};
