import { MapProvider } from "~/contexts/MapContext";
import { MapScreen } from "~/screens/MapScreen";

export default function ExploreTab() {
    return (
        <MapProvider>
            <MapScreen />
        </MapProvider>
    );
}
