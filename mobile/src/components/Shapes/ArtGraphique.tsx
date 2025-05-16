import { ArtwayColors } from "~/utils/constants";
import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";

const ArtGraphique = (props: SvgProps) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 232.16 232.16"
        {...props}
    >
        <G clipPath="url(#a)">
            <Path
                fill={ArtwayColors.DARK_BLUE}
                d="M116.08 116.08c64.11 0 116.08-51.97 116.08-116.08-64.11 0-116.08 51.97-116.08 116.08C116.08 51.97 64.11 0 0 0c0 64.11 51.97 116.08 116.08 116.08C51.97 116.08 0 168.05 0 232.16c64.11 0 116.08-51.97 116.08-116.08 0 64.11 51.97 116.08 116.08 116.08 0-64.11-51.97-116.08-116.08-116.08Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill={ArtwayColors.WHITE} d="M0 0h232.16v232.16H0z" />
            </ClipPath>
        </Defs>
    </Svg>
);
export default ArtGraphique;
