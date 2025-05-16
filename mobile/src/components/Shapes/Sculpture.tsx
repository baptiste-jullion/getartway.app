import { ArtwayColors } from "~/utils/constants";
import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";

const Sculpture = (props: SvgProps) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 232.16 232.16"
        {...props}
    >
        <G clipPath="url(#a)">
            <Path
                fill={ArtwayColors.YELLOW}
                d="M232.16 0H0c0 29.96 22.86 54.82 52 58.04-29.14 3.22-52 28.08-52 58.04s22.86 54.82 52 58.04c-29.14 3.21-52 28.08-52 58.04h232.16c0-29.96-22.86-54.82-52-58.04 29.14-3.22 52-28.08 52-58.04s-22.86-54.82-52-58.04c29.14-3.22 52-28.08 52-58.04Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill={ArtwayColors.WHITE} d="M0 0h232.16v232.16H0z" />
            </ClipPath>
        </Defs>
    </Svg>
);
export default Sculpture;
