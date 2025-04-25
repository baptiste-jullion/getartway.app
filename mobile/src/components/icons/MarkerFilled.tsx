import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const MarkerFilled = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 140 140" fill="none" {...props}>
        <Path
            fill="#000"
            d="M73.47 130.53c1.691-1.882 41.515-46.592 41.515-77.034C114.985 28.96 95.025 9 70.493 9 45.96 9 26 28.961 26 53.496c0 30.442 39.824 75.152 41.515 77.034 1.596 1.763 4.383 1.763 5.955 0ZM48.103 53.496c0-12.339 10.052-22.391 22.39-22.391 12.338 0 22.389 10.052 22.389 22.39 0 12.34-10.051 22.392-22.39 22.392-12.337 0-22.389-10.052-22.389-22.391Z"
        />
    </Svg>
);
export default MarkerFilled;
