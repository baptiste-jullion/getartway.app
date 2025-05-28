import BookOpenFilled from "~/components/Icons/BookOpenFilled";
import BookOpenOutlined from "~/components/Icons/BookOpenOutlined";
import Brush from "~/components/Icons/Brush";
import Checkmark from "~/components/Icons/Checkmark";
import Chevron from "~/components/Icons/Chevron";
import Cog from "~/components/Icons/Cog";
import CompassFilled from "~/components/Icons/CompassFilled";
import CompassOutlined from "~/components/Icons/CompassOutlined";
import Cross from "~/components/Icons/Cross";
import HeartFilled from "~/components/Icons/HeartFilled";
import HeartOutlined from "~/components/Icons/HeartOutlined";
import HouseFilled from "~/components/Icons/HouseFilled";
import HouseOutlined from "~/components/Icons/HouseOutlined";
import LayersFilled from "~/components/Icons/LayersFilled";
import LayersOutlined from "~/components/Icons/LayersOutlined";
import Magnify from "~/components/Icons/Magnify";
import MarkerFilled from "~/components/Icons/MarkerFilled";
import MarkerOutlined from "~/components/Icons/MarkerOutlined";
import NorthFilled from "~/components/Icons/NorthFilled";
import NorthOutlined from "~/components/Icons/NorthOutlined";
import Send from "~/components/Icons/Send";
import StarFilled from "~/components/Icons/StarFilled";
import StarOutlined from "~/components/Icons/StarOutlined";
import Ticket from "~/components/Icons/Ticket";
import TuneFilled from "~/components/Icons/TuneFilled";
import TuneOutlined from "~/components/Icons/TuneOutlined";
import UserFilled from "~/components/Icons/UserFilled";
import UserOutlined from "~/components/Icons/UserOutlined";
import React from "react";
import { SvgProps } from "react-native-svg";

const IconComponents = {
    BookOpenFilled,
    BookOpenOutlined,
    Brush,
    Checkmark,
    Chevron,
    Cog,
    CompassFilled,
    CompassOutlined,
    Cross,
    HeartFilled,
    HeartOutlined,
    HouseFilled,
    HouseOutlined,
    LayersFilled,
    LayersOutlined,
    Magnify,
    MarkerFilled,
    MarkerOutlined,
    NorthFilled,
    NorthOutlined,
    Send,
    StarFilled,
    StarOutlined,
    Ticket,
    TuneFilled,
    TuneOutlined,
    UserFilled,
    UserOutlined,
};

export interface IconProps extends SvgProps {
    name: keyof typeof IconComponents;
}

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
    const IconComponent = IconComponents[name];

    return <IconComponent {...props} />;
};
