import dotenv from "dotenv";
import { ExpoConfig } from "expo/config";

dotenv.config();

export default {
    expo: {
        name: "mobile",
        slug: "mobile",
        version: "1.0.0",
        orientation: "portrait",
        icon: "./assets/icon.png",
        userInterfaceStyle: "light",
        scheme: "artway-scheme",
        newArchEnabled: true,
        splash: {
            image: "./assets/splash-icon.png",
            resizeMode: "contain",
            backgroundColor: "#ffffff",
        },
        experiments: {
            typedRoutes: true,
        },
        ios: {
            supportsTablet: true,
            bundleIdentifier: "com.anonymous.mobile",
        },
        android: {
            adaptiveIcon: {
                foregroundImage: "./assets/adaptive-icon.png",
                backgroundColor: "#ffffff",
            },
            package: "com.anonymous.mobile",
        },
        web: {
            favicon: "./assets/favicon.png",
        },
        plugins: [
            [
                "@rnmapbox/maps",
                {
                    RNMapboxMapsAccessToken: process.env.MAPBOX_PUBLIC_KEY,
                    RNMapboxMapsDownloadToken: process.env.MAPBOX_SECRET_KEY,
                    RNMapboxMapsVersion: "11.0.0",
                },
            ],
            "expo-font",
            "expo-router",
        ],
        extra: {
            eas: {
                projectId: "874a5c1a-2653-46a4-b04a-5a143613f833",
            },
            MAPBOX_PUBLIC_KEY: process.env.MAPBOX_PUBLIC_KEY,
            API_URL: process.env.API_URL,
        },
    },
} as { expo: ExpoConfig };
