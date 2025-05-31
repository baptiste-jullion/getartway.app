import "~/sheets";
import { PermissionsProvider } from "~/contexts/PermissionsContext";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SheetProvider } from "react-native-actions-sheet";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export default function Layout() {
    return (
        <SheetProvider>
            <PermissionsProvider>
                <StatusBar style="inverted" />
                <SafeAreaView style={{ flex: 1 }}>
                    <Stack>
                        <Stack.Screen
                            name="(tabs)"
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="(exhibitions)/details/[id]"
                            options={{ headerShown: false }}
                        />
                    </Stack>
                    <Toast />
                </SafeAreaView>
            </PermissionsProvider>
        </SheetProvider>
    );
}
