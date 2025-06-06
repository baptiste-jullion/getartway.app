import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const CompassFilled = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 140 140" fill="none" {...props}>
        <Path
            fill="currentColor"
            d="M70.214 6C34.75 6 6 34.75 6 70.219c0 35.468 28.749 64.219 64.214 64.219 35.466 0 64.215-28.751 64.215-64.22C134.429 34.752 105.68 6 70.214 6Zm33.298 39.732-14.72 35.992a12.877 12.877 0 0 1-7.05 7.05l-35.99 14.721c-5.477 2.239-11.003-3.144-8.86-8.694L50.97 58.31a12.885 12.885 0 0 1 7.384-7.384l36.49-14.078c5.525-2.144 10.932 3.382 8.693 8.861l-.024.024Z"
        />
        <Path
            fill="currentColor"
            d="M70.214 60.334c-5.454 0-9.86 4.43-9.86 9.861 0 5.43 4.43 9.862 9.86 9.862s9.861-4.431 9.861-9.862-4.43-9.861-9.86-9.861Z"
        />
    </Svg>
);
export default CompassFilled;
