import Brush from "~/components/Icons/Brush";
import MarkerOutlined from "~/components/Icons/MarkerOutlined";
import Ticket from "~/components/Icons/Ticket";
import { ArtwayColors } from "~/utils/constants";
import React from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";

const Icons = {
    MarkerOutlined,
    Brush,
    Ticket,
};

interface TagProps {
    text: string;
    icon: keyof typeof Icons;
    style?: StyleProp<ViewStyle>;
}

export const Tag: React.FC<TagProps> = ({ text, icon, style }) => {
    const Icon = Icons[icon];

    return (
        <View
            style={[
                {
                    backgroundColor: ArtwayColors.WHITE,
                    paddingBlock: 2,
                    paddingInline: 12,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius: 100,
                    gap: 4,
                },
                style,
            ]}
        >
            <Icon width={18} height={18} color={ArtwayColors.BLACK} />
            <Text>{text}</Text>
        </View>
    );
};
