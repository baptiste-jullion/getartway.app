import { ArtwayColors } from "~/utils/constants";
import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const Video = (props: SvgProps) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 232.16 232.16"
        {...props}
    >
        <Path
            fill={ArtwayColors.RED}
            d="M116.08 46.52c38.26 0 69.38 31.12 69.38 69.38 0 38.26-31.12 69.38-69.38 69.38-38.26 0-69.38-31.12-69.38-69.38 0-38.26 31.12-69.38 69.38-69.38Zm0-46.52C52.07 0 .18 51.89.18 115.9s51.89 115.9 115.9 115.9 115.9-51.89 115.9-115.9S180.09 0 116.08 0Z"
        />
        <Path
            fill={ArtwayColors.RED}
            d="M116.08 151.94c19.904 0 36.04-16.136 36.04-36.04s-16.136-36.04-36.04-36.04-36.04 16.136-36.04 36.04 16.136 36.04 36.04 36.04Z"
        />
    </Svg>
);
export default Video;
