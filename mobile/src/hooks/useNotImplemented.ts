import Toast from "react-native-toast-message";

export const alertNotImplemented = () => {
    Toast.show({
        type: "error",
        text1: "Cette fonctionnalité n'est pas encore disponible",
    });
};
