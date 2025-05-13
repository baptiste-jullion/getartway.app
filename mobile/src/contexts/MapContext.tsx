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
}

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
