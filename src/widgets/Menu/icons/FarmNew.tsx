import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    
<Svg xmlns="http://www.w3.org/2000/svg"  {...props} viewBox="0 0 64 64" aria-labelledby="title"
aria-describedby="desc" role="img">
  <title>Tractor</title>
  <desc>A color styled icon from Orion Icon Library.</desc>
  <circle data-name="layer3"
  cx="51" cy="51" r="7" fill="#7b8baf"></circle>
  <circle data-name="layer3" cx="16" cy="46" r="12" fill="#7b8baf"></circle>
  <path data-name="layer2" d="M27.9 30H34L30 8H8v19.7A19.9 19.9 0 0 1 27.9 30z"
  fill="#c3d6e0"></path>
  <path data-name="layer1" d="M34 30h-6.1a20 20 0 0 1 6.7 8.6 19.8 19.8 0 0 1 1.3 5.4h23.6L62 30z"
  fill="#fc0"></path>
  <path data-name="opacity" d="M30 8h-3L8 27v.7a19.9 19.9 0 0 1 8-1.7h1.8l13.1-13zm-6.5 19.5a20.1 20.1 0 0 1 3.7 2l5.7-5.7L32 19z"
  fill="#fff" opacity=".5"></path>
  <path data-name="opacity" d="M34.7 39a19.7 19.7 0 0 1 1.2 5h23.6l.9-5z"
  fill="#000064" opacity=".15"></path>
  <circle data-name="opacity" cx="16.1" cy="46" r="8" fill="#000064"
  opacity=".25"></circle>
  <circle data-name="opacity" cx="51" cy="51" r="3" fill="#000064"
  opacity=".25"></circle>
  <circle data-name="stroke" cx="51" cy="51" r="7" fill="none"
  stroke="#2e4369" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
  <circle data-name="stroke" cx="16" cy="46" r="12" fill="none"
  stroke="#2e4369" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
  <path data-name="stroke" d="M2 31.7A20 20 0 0 1 36 46M8 27.7V8h22l4 22"
  fill="none" stroke="#2e4369" stroke-linecap="round" stroke-linejoin="round"
  stroke-width="2"></path>
  <path data-name="stroke" fill="none" stroke="#2e4369" stroke-linecap="round"
  stroke-linejoin="round" stroke-width="2" d="M27.9 30H62l-2.5 14H35.9M46 30V15.7a3.7 3.7 0 0 1 3.7-3.7h.3"></path>
</Svg>
  );
};

export default Icon;


