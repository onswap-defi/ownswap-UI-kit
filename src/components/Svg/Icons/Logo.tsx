import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Icon: React.FC<LogoProps> = ({isDark,...props}) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <image width="32" height="32" href={isDark ? '/images/darklogo.png' : '/images/darklogo.png'}/>
    </Svg>
  );
};

export default Icon;
