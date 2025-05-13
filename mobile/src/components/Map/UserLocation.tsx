import MapboxGL from "@rnmapbox/maps";
import { useMapContext } from "~/contexts/MapContext";
import React from "react";

export const UserLocation = () => {
    const { setUserLocation } = useMapContext();

    // const [hasLocationPermission, setHasLocationPermission] = useState(false);
    //
    // useEffect(() => {
    //     const requestLocationPermission = async () => {
    //         if (Platform.OS === "android") {
    //             try {
    //                 const granted = await PermissionsAndroid.request(
    //                     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //                     {
    //                         title: "Location Permission",
    //                         message:
    //                             "This app needs location permission to show your location on the map.",
    //                         buttonNeutral: "Ask Me Later",
    //                         buttonNegative: "Cancel",
    //                         buttonPositive: "OK",
    //                     },
    //                 );
    //                 if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //                     console.log("You can use the location");
    //                     setHasLocationPermission(true);
    //                 } else {
    //                     console.log("Location permission denied");
    //                 }
    //             } catch (err) {
    //                 console.warn(err);
    //             }
    //         } else {
    //             // For iOS, you'll need to handle location permissions differently
    //             // using the react-native-permissions library or similar.
    //             setHasLocationPermission(true); // Assume permission is granted for simplicity in this example
    //         }
    //     };
    //
    //     requestLocationPermission();
    // }, []);

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
