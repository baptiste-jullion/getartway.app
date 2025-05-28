import Fashion from "~/components/Shapes/Fashion";
import GraphicArt from "~/components/Shapes/GraphicArt";
import Interactive from "~/components/Shapes/Interactive";
import Photo from "~/components/Shapes/Photo";
import Sculpture from "~/components/Shapes/Sculpture";
import Sound from "~/components/Shapes/Sound";
import StreetArt from "~/components/Shapes/StreetArt";
import Video from "~/components/Shapes/Video";
import Virtual from "~/components/Shapes/Virtual";
import React from "react";
import { SvgProps } from "react-native-svg";

const ShapeComponents = {
    Fashion,
    GraphicArt,
    Interactive,
    Photo,
    Sculpture,
    Sound,
    StreetArt,
    Video,
    Virtual,
};

interface ShapeProps extends SvgProps {
    name: keyof typeof ShapeComponents;
}

export const Shape: React.FC<ShapeProps> = ({ name, ...props }) => {
    const ShapeComponent = ShapeComponents[name];

    return <ShapeComponent {...props} />;
};
