import Fashion from "~/components/Patterns/Fashion";
import GraphicArt from "~/components/Patterns/GraphicArt";
import Interactive from "~/components/Patterns/Interactive";
import Photo from "~/components/Patterns/Photo";
import Sculpture from "~/components/Patterns/Sculpture";
import Sound from "~/components/Patterns/Sound";
import StreetArt from "~/components/Patterns/StreetArt";
import Video from "~/components/Patterns/Video";
import Virtual from "~/components/Patterns/Virtual";
import React from "react";
import { SvgProps } from "react-native-svg";

const PatternComponents = {
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

interface PatternProps extends SvgProps {
    name: keyof typeof PatternComponents;
}

export const Pattern: React.FC<PatternProps> = ({ name, ...props }) => {
    const PatternComponent = PatternComponents[name];

    return <PatternComponent {...props} />;
};
