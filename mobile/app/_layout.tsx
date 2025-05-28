import "~/sheets";
import { PermissionsProvider } from "~/contexts/PermissionsContext";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SheetProvider } from "react-native-actions-sheet";

export default function Layout() {
    return (
        <SheetProvider>
            <PermissionsProvider>
                <StatusBar style="inverted" />
                <Stack>
                    <Stack.Screen
                        name="(tabs)"
                        options={{ headerShown: false }}
                    />
                </Stack>
            </PermissionsProvider>
        </SheetProvider>
    );
}
