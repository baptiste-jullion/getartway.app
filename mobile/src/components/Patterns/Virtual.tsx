import { ArtwayColors } from "~/utils/constants";
import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";

const Virtual = (props: SvgProps) => (
    <Svg width={288} height={64} fill="none" {...props}>
        <G clipPath="url(#a)">
            <G fill={ArtwayColors.RED} clipPath="url(#b)">
                <Path d="M224.196 6.15 192.105-.24V12.63l32.091 6.386V6.15ZM256.281 51.073l-32.086-6.386v12.867l32.086 6.386V51.073Z" />
                <Path d="m224.196 31.834-32.091-6.39v12.872l32.091 6.386V31.834Z" />
                <Path d="m256.281 25.408-32.086-6.39v12.867l32.086 6.39V25.409ZM288.371 6.15l-32.09-6.39V12.63l32.09 6.386V6.15Z" />
                <Path d="m288.371 31.834-32.09-6.39v12.872l32.09 6.386V31.834ZM32.09 6.15 0-.24V12.63l32.09 6.386V6.15ZM64.175 51.073 32.09 44.687v12.867l32.085 6.386V51.073ZM32.09 31.834 0 25.444v12.872l32.09 6.386V31.834Z" />
                <Path d="m64.175 25.408-32.085-6.39v12.867l32.085 6.39V25.409ZM96.266 6.15 64.176-.24V12.63l32.09 6.386V6.15ZM128.351 51.073l-32.085-6.386v12.867l32.085 6.386V51.073Z" />
                <Path d="m96.266 31.834-32.09-6.39v12.872l32.09 6.386V31.834Z" />
                <Path d="m128.351 25.408-32.085-6.39v12.867l32.085 6.39V25.409ZM160.442 6.15 128.351-.24V12.63l32.091 6.386V6.15ZM192.527 51.073l-32.085-6.386v12.867l32.085 6.386V51.073Z" />
                <Path d="m160.442 31.834-32.091-6.39v12.872l32.091 6.386V31.834Z" />
                <Path d="m192.527 25.408-32.085-6.39v12.867l32.085 6.39V25.409Z" />
            </G>
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h288v64H0z" />
            </ClipPath>
            <ClipPath id="b">
                <Path fill="#fff" d="M0 64h769.811V0H0z" />
            </ClipPath>
        </Defs>
    </Svg>
);
export default Virtual;
