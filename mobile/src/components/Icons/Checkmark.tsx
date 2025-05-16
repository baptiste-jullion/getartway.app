import { ArtwayColors } from "~/utils/constants";
import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const Checkmark = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 140 140" fill="none" {...props}>
        <Path
            fill={ArtwayColors.BLACK}
            d="M124.088 32.025c-1.357-1.358-3.167-2.025-4.954-2.025a6.937 6.937 0 0 0-4.93 2.025L53.705 92.528 25.933 64.753c-1.31-1.334-3.073-2.048-4.954-2.048-1.882 0-3.62.715-4.93 2.048A6.959 6.959 0 0 0 14 69.684c0 1.858.738 3.62 2.048 4.955l32.727 32.705c2.715 2.739 7.145 2.739 9.884 0l65.429-65.434a6.96 6.96 0 0 0 2.049-4.93 7.015 7.015 0 0 0-2.049-4.955Z"
        />
    </Svg>
);
export default Checkmark;
