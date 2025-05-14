import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { PermissionsAndroid, Platform } from "react-native";

interface PermissionsContextType {
    hasLocationPermission: boolean;
    requestLocationPermission: () => Promise<void>;
}

const PermissionsContext = createContext<PermissionsContextType | null>(null);

export const PermissionsProvider = ({ children }: { children: ReactNode }) => {
    const [hasLocationPermission, setHasLocationPermission] = useState(false);

    const requestLocationPermission = async () => {
        if (Platform.OS === "android") {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log("You can use the location");
                    setHasLocationPermission(true);
                } else {
                    console.log("Location permission denied");
                }
            } catch (err) {
                console.warn(err);
            }
        }
    };

    useEffect(() => {
        requestLocationPermission();
    }, [requestLocationPermission]);

    return (
        <PermissionsContext.Provider
            value={{
                hasLocationPermission,
                requestLocationPermission,
            }}
        >
            {children}
        </PermissionsContext.Provider>
    );
};

export const usePermissionsContext = () => {
    const context = useContext(PermissionsContext);
    if (!context)
        throw new Error(
            "usePermissionsContext must be used within a PermissionsProvider",
        );

    return context;
};
