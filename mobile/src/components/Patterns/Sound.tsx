import { ArtwayColors } from "~/utils/constants";
import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";

const Sound = (props: SvgProps) => (
    <Svg width={288} height={64} fill="none" {...props}>
        <G clipPath="url(#a)">
            <G fill={ArtwayColors.DARK_BLUE} clipPath="url(#b)">
                <Path d="M193.084.01h31.99l-15.722 63.98L193.084.01Z" />
                <Path d="M241.342 63.99 225.073.01h31.99l-15.721 63.98ZM257.064.01h31.99l-15.722 63.98L257.064.01ZM.311.01h31.985L16.574 63.99.311.01ZM48.564 63.99 32.296.01h31.99L48.564 63.99ZM64.286.01h31.99L80.555 63.99 64.286.01ZM112.544 63.99 96.276.01h31.99l-15.722 63.98ZM128.266.01h31.99l-15.722 63.98L128.266.01ZM176.524 63.99 160.256.01h31.99l-15.722 63.98Z" />
            </G>
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h288v64H0z" />
            </ClipPath>
            <ClipPath id="b">
                <Path fill="#fff" d="M0 64h769.741V0H0z" />
            </ClipPath>
        </Defs>
    </Svg>
);
export default Sound;
