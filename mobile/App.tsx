import { MapProvider } from "~/contexts/MapContext";
import { PermissionsProvider } from "~/contexts/PermissionsContext";
import { MapScreen } from "~/screens/MapScreen";

export default function App() {
    return (
        <PermissionsProvider>
            <MapProvider>
                <MapScreen />
            </MapProvider>
        </PermissionsProvider>
    );
}
