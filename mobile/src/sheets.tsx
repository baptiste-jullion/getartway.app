import { ExhibitionActionSheet } from "~/components/Map/ExhibitionActionSheet";
import { registerSheet, SheetDefinition } from "react-native-actions-sheet";

registerSheet("exhibition-sheet", ExhibitionActionSheet);

declare module "react-native-actions-sheet" {
    interface Sheets {
        "exhibition-sheet": SheetDefinition<{
            payload: {
                exhibitionId: string;
            };
        }>;
    }
}

export {};
