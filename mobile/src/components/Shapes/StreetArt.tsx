import { ArtwayColors } from "~/utils/constants";
import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";

const StreetArt = (props: SvgProps) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 232.16 232.16"
        {...props}
    >
        <G fill={ArtwayColors.DARK_BLUE} clipPath="url(#a)">
            <Path d="m73.64 184.56 32.46 47.6H46.54l-32.45-47.6 47.28-69.35-47.28-69.34L45.36 0h59.55L73.64 45.87l47.29 69.34-47.29 69.35Z" />
            <Path d="m173.99 184.56 32.45 47.6h-59.56l-32.45-47.6 47.28-69.35-47.28-69.34L145.7 0h59.56l-31.27 45.87 47.28 69.34-47.28 69.35Z" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill={ArtwayColors.WHITE} d="M0 0h232.16v232.16H0z" />
            </ClipPath>
        </Defs>
    </Svg>
);
export default StreetArt;
