import { ArtwayColors } from "~/utils/constants";
import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";

const Interactif = (props: SvgProps) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 232.16 232.16"
        {...props}
    >
        <G clipPath="url(#a)">
            <Path
                fill={ArtwayColors.RED}
                d="M154.77 0c-42.74 0-77.38 34.65-77.38 77.39C34.65 77.39 0 112.03 0 154.77c0 42.74 34.65 77.39 77.39 77.39s77.39-34.65 77.39-77.39c42.74 0 77.39-34.65 77.39-77.39S197.51 0 154.77 0Zm0 154.77H77.38V77.38h77.39v77.39Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill={ArtwayColors.WHITE} d="M0 0h232.16v232.16H0z" />
            </ClipPath>
        </Defs>
    </Svg>
);
export default Interactif;
