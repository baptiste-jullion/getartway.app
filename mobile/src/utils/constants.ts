export const LocationsConstants: Record<
    "ANNECY" | "ARA_MAX_NE" | "ARA_MAX_SW",
    [number, number]
> = {
    ANNECY: [6.128158, 45.899247],
    ARA_MAX_NE: [7.18556 + 0.25, 46.80417 + 0.25],
    ARA_MAX_SW: [2.06278 - 0.25, 44.11556 - 0.25],
};

export const ArtwayColors = {
    BLACK: "#1C1C1A",
    RED: "#E51F3B",
    WHITE: "#FFFFFF",
    YELLOW: "#F4980C",
    LIGHT_GREY: "#F8F7F7",
    AVERAGE_GREY: "#CCCCCC",
    DARK_GREY: "#858484",
    LIGHT_BLUE: "#66C2C6",
    DARK_BLUE: "#23274F",
} as const;
