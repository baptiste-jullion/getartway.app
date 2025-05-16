import { ArtwayColors } from "~/utils/constants";
import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const HouseFilled = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 140 140" fill="none" {...props}>
        <Path
            fill={ArtwayColors.BLACK}
            d="M9.161 66.68c1.81 2.167 5.026 2.477 7.193.666l1.596-1.31v47.712c0 8.456 6.86 15.316 15.315 15.316h13.958V84.306a5.113 5.113 0 0 1 5.12-5.121H88.19c2.81 0 5.097 2.287 5.097 5.121v44.758h13.982c8.455 0 15.291-6.86 15.315-15.316V66.036l1.572 1.31a5.102 5.102 0 0 0 7.193-.667c1.81-2.191 1.501-5.407-.667-7.193L73.518 12.179c-1.882-1.572-4.62-1.572-6.526 0L9.852 59.486c-2.168 1.786-2.477 5.002-.691 7.193Z"
        />
        <Path
            fill={ArtwayColors.BLACK}
            d="M83.07 89.404H57.44v39.66h25.63v-39.66Z"
        />
    </Svg>
);
export default HouseFilled;
