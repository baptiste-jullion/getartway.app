import Brush from "~/components/Icons/Brush";
import MarkerOutlined from "~/components/Icons/MarkerOutlined";
import { ArtwayColors } from "~/utils/constants";
import React from "react";
import { Text, View } from "react-native";

const Icons = {
    MarkerOutlined,
    Brush,
};

interface TagProps {
    text: string;
    icon: keyof typeof Icons;
}

export const Tag: React.FC<TagProps> = ({ text, icon }) => {
    const Icon = Icons[icon];

    return (
        <View
            style={{
                backgroundColor: ArtwayColors.WHITE,
                paddingBlock: 2,
                paddingInline: 12,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 100,
                gap: 4,
            }}
        >
            <Icon width={18} height={18} />
            <Text>{text}</Text>
        </View>
    );
};
