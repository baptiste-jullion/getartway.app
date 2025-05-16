import { ArtwayColors } from "~/utils/constants";
import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const HeartFilled = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 140 140" fill="none" {...props}>
        <Path
            fill={ArtwayColors.BLACK}
            d="M25.171 85.313c7.05 8.885 16.292 16.412 25.129 22.558 3.382 2.334 6.812 4.478 9.932 6.074 2.93 1.501 6.312 2.858 9.384 2.858 3.073 0 6.431-1.357 9.385-2.858 3.12-1.596 6.526-3.74 9.908-6.074 8.837-6.146 18.078-13.673 25.128-22.558 7.074-8.885 12.195-19.413 12.195-31.395 0-17.46-15.339-30.918-33.321-30.918-9.29 0-17.436 4.335-23.295 9.98C63.756 27.335 55.587 23 46.322 23 28.315 23 13 36.458 13 53.918c0 11.982 5.097 22.51 12.171 31.395Z"
        />
    </Svg>
);
export default HeartFilled;
