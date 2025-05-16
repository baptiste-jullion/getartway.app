import { ArtwayColors } from "~/utils/constants";
import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const HouseOutlined = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 140 140" fill="none" {...props}>
        <Path
            fill={ArtwayColors.BLACK}
            d="M9.18 66.68c1.81 2.167 5.026 2.477 7.194.666l1.572-1.31v47.688c0 8.456 6.86 15.316 15.315 15.316h74.004c8.455 0 15.315-6.86 15.315-15.316V66.036l1.572 1.31c2.167 1.81 5.383 1.501 7.193-.667 1.81-2.167 1.5-5.383-.667-7.193L73.514 12.179a5.072 5.072 0 0 0-6.502 0L9.846 59.486c-2.167 1.81-2.477 5.026-.666 7.193Zm73.909 52.165H57.46V89.404H83.09v29.441ZM28.188 57.58l42.11-34.849 42.111 34.85v56.143a5.102 5.102 0 0 1-5.097 5.097H93.355V84.258a5.103 5.103 0 0 0-5.098-5.097H52.411a5.103 5.103 0 0 0-5.097 5.097v34.563H33.356a5.102 5.102 0 0 1-5.097-5.097V57.58h-.071Z"
        />
    </Svg>
);
export default HouseOutlined;
