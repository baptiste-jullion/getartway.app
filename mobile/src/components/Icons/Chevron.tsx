import { ArtwayColors } from "~/utils/constants";
import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const Chevron = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 140 140" fill="none" {...props}>
        <Path
            fill={ArtwayColors.BLACK}
            d="M46.464 113.245c1.934 1.952 5.095 1.952 7.047 0l39.864-39.867a4.973 4.973 0 0 0 0-7.047L53.511 26.464c-1.935-1.952-5.095-1.952-7.047 0-1.952 1.934-1.952 5.096 0 7.047l36.34 36.361-36.34 36.36c-1.952 1.935-1.952 5.096 0 7.048v-.035Z"
        />
    </Svg>
);
export default Chevron;
