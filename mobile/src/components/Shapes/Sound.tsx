import { ArtwayColors } from "~/utils/constants";
import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";

const Sound = (props: SvgProps) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 232.16 232.16"
        {...props}
    >
        <G fill={ArtwayColors.DARK_BLUE} clipPath="url(#a)">
            <Path d="M0 232.16h116.08L59.02 0 0 232.16Z" />
            <Path d="m175.1 0-59.02 232.16h116.08L175.1 0Z" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill={ArtwayColors.WHITE} d="M0 0h232.16v232.16H0z" />
            </ClipPath>
        </Defs>
    </Svg>
);
export default Sound;
