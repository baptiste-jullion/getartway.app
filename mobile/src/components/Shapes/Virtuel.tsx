import { ArtwayColors } from "~/utils/constants";
import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";

const Virtuel = (props: SvgProps) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 232.16 232.16"
        {...props}
    >
        <G fill={ArtwayColors.RED} clipPath="url(#a)">
            <Path d="m232.16 140.36-116.08 22.32v-46.79l116.08-22.32v46.79ZM116.08 209.46 0 231.78v-46.79l116.08-22.31v46.78ZM232.16 46.79 116.08 69.1V22.31L232.16 0v46.79ZM116.08 115.89 0 138.2V91.42L116.08 69.1v46.79Z" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill={ArtwayColors.WHITE} d="M0 0h232.16v232.16H0z" />
            </ClipPath>
        </Defs>
    </Svg>
);
export default Virtuel;
