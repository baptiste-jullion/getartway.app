import { MapProvider } from "~/contexts/MapContext";
import { MapScreen } from "~/screens/MapScreen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ExploreTab() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MapProvider>
                <MapScreen />
            </MapProvider>
        </SafeAreaView>
    );
}
