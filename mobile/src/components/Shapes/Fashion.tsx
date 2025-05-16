import { ArtwayColors } from "~/utils/constants";
import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";

const Fashion = (props: SvgProps) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 232.16 232.16"
        {...props}
    >
        <G clipPath="url(#a)">
            <Path
                fill={ArtwayColors.LIGHT_BLUE}
                d="M122.52 116.26C183.63 112.92 232.16 61.95 232.16 0h-46.52c0 38.36-31.21 69.92-69.56 69.92S46.52 38.36 46.52 0H0c0 61.95 48.53 112.92 109.64 116.26C48.53 119.6 0 170.21 0 232.16h232.16c0-61.95-48.53-112.56-109.64-115.9Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill={ArtwayColors.WHITE} d="M0 0h232.16v232.16H0z" />
            </ClipPath>
        </Defs>
    </Svg>
);
export default Fashion;
