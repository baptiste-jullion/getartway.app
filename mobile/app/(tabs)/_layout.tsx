import BookOpenFilled from "~/components/Icons/BookOpenFilled";
import BookOpenOutlined from "~/components/Icons/BookOpenOutlined";
import CompassFilled from "~/components/Icons/CompassFilled";
import CompassOutlined from "~/components/Icons/CompassOutlined";
import HeartFilled from "~/components/Icons/HeartFilled";
import HeartOutlined from "~/components/Icons/HeartOutlined";
import HouseFilled from "~/components/Icons/HouseFilled";
import HouseOutlined from "~/components/Icons/HouseOutlined";
import UserFilled from "~/components/Icons/UserFilled";
import UserOutlined from "~/components/Icons/UserOutlined";
import { ArtwayColors } from "~/utils/constants";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: ArtwayColors.BLACK,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarIcon: ({ focused }) =>
                        focused ? <HouseFilled /> : <HouseOutlined />,
                }}
            />
            <Tabs.Screen
                name="news"
                options={{
                    headerShown: false,
                    title: "Actus",
                    tabBarIcon: ({ focused }) =>
                        focused ? <BookOpenFilled /> : <BookOpenOutlined />,
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    headerShown: false,
                    title: "Explorer",
                    tabBarIcon: ({ focused }) =>
                        focused ? <CompassFilled /> : <CompassOutlined />,
                }}
            />
            <Tabs.Screen
                name="favorites"
                options={{
                    headerShown: false,
                    title: "Favoris",
                    tabBarIcon: ({ focused }) =>
                        focused ? <HeartFilled /> : <HeartOutlined />,
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    headerShown: false,
                    title: "Compte",
                    tabBarIcon: ({ focused }) =>
                        focused ? <UserFilled /> : <UserOutlined />,
                }}
            />
        </Tabs>
    );
}
