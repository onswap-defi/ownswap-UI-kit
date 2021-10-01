import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 66 26" {...props}>
      <image width="66" height="26" href={isDark ? '/images/darklogo.png' : '/images/logo.png'}/>
    </Svg>
  )
};

export default Logo;
