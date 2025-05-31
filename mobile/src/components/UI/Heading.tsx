import { FunnelDisplay_700Bold } from "@expo-google-fonts/funnel-display";
import { useFonts } from "expo-font";
import { Text, TextProps } from "react-native";

interface HeadingProps extends TextProps {
    headingLevel: "h1" | "h2" | "h3";
}

const fontSizes: Record<HeadingProps["headingLevel"], number> = {
    h1: 20,
    h2: 18,
    h3: 16,
};

export const Heading: React.FC<HeadingProps> = ({
    children,
    headingLevel,
    style,
    ...props
}) => {
    const [fontsLoaded] = useFonts({
        FunnelDisplay_700Bold,
    });

    return (
        <Text
            style={[
                {
                    fontFamily: fontsLoaded
                        ? "FunnelDisplay_700Bold"
                        : undefined,
                    fontSize: fontSizes[headingLevel],
                },
                style,
            ]}
            {...props}
        >
            {children}
        </Text>
    );
};
