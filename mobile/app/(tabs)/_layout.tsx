import { Icon, IconProps } from "~/components/Icons/Icon";
import { ArtwayColors } from "~/utils/constants";
import { Tabs } from "expo-router";

const TABS: {
    title: string;
    name: string;
    icon: [IconProps["name"], IconProps["name"]];
}[] = [
    {
        title: "Home",
        name: "index",
        icon: ["HouseFilled", "HouseOutlined"],
    },
    {
        title: "Actus",
        name: "news",
        icon: ["BookOpenFilled", "BookOpenOutlined"],
    },
    {
        title: "Explorer",
        name: "explore",
        icon: ["CompassFilled", "CompassOutlined"],
    },
    {
        title: "Favoris",
        name: "favorites",
        icon: ["HeartFilled", "HeartOutlined"],
    },
    {
        title: "Compte",
        name: "account",
        icon: ["UserFilled", "UserOutlined"],
    },
];

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: ArtwayColors.BLACK,
                tabBarHideOnKeyboard: true,
            }}
        >
            {TABS.map((tab) => (
                <Tabs.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        headerShown: false,
                        title: tab.title,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Icon
                                    color={ArtwayColors.BLACK}
                                    name={tab.icon[0]}
                                />
                            ) : (
                                <Icon
                                    color={ArtwayColors.BLACK}
                                    name={tab.icon[1]}
                                />
                            ),
                    }}
                />
            ))}
        </Tabs>
    );
}
