import "~/sheets.tsx";
import { MapProvider } from "~/contexts/MapContext";
import { PermissionsProvider } from "~/contexts/PermissionsContext";
import { MapScreen } from "~/screens/MapScreen";
import { SheetProvider } from "react-native-actions-sheet";

export default function App() {
    return (
        <SheetProvider>
            <PermissionsProvider>
                <MapProvider>
                    <MapScreen />
                </MapProvider>
            </PermissionsProvider>
        </SheetProvider>
    );
}
