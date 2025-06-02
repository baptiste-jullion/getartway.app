import { ArtwayColors } from "~/utils/constants";
import {
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
} from "react-native";

export const Button: React.FC<TouchableOpacityProps> = ({
    style,
    ...props
}) => {
    return <TouchableOpacity style={[styles.button, style]} {...props} />;
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: ArtwayColors.WHITE,
        color: ArtwayColors.BLACK,
        width: 48,
        height: 48,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
});
