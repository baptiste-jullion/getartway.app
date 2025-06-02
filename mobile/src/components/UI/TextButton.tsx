import { ArtwayColors } from "~/utils/constants";
import {
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
} from "react-native";

export const TextButton: React.FC<TouchableOpacityProps> = ({
    style,
    ...props
}) => {
    return <TouchableOpacity style={[styles.button, style]} {...props} />;
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: ArtwayColors.BLACK,
        color: ArtwayColors.WHITE,
        flexDirection: "row",
        borderRadius: 6,
        padding: 12,
        gap: 8,
        alignItems: "center",
        justifyContent: "center",
    },
});
