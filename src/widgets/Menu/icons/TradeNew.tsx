import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 64 64" {...props} xmlns="http://www.w3.org/2000/svg" aria-labelledby="title"
    aria-describedby="desc" role="img">
      <title>Pay</title>
      <desc>A color styled icon from Orion Icon Library.</desc>
      <path d="M52 36.997h10v22.002H52z"
      fill="#c3d6f9" data-name="layer3"></path>
      <circle fill="#fc6" r="8" cy="11.001" cx="34.055" data-name="layer2"></circle>
      <circle fill="#fc6" r="8" cy="29.001" cx="20.008" data-name="layer2"></circle>
      <path fill="#ffd4c7" d="M36.051 53h-10a4 4 0 0 1-4-4 4 4 0 0 1 4-4h4C42 45 38 39 52 39v16.187C50 55.187 37.063 61 30 61c-4.24 0-7.949-2.17-16-6-3.82-1.82-12-6.613-12-10 0-4 10.893 1.063 20.051 4"
      data-name="layer1"></path>
      <path opacity=".15" fill="#000064" d="M52 51.187C50 51.187 37.063 57 30 57c-4.24 0-7.949-2.17-16-6-2.911-1.386-8.344-4.5-10.769-7.4A1.334 1.334 0 0 0 2 45c0 3.388 8.18 8.181 12 10 8.051 3.83 11.76 6 16 6 7.063 0 20-5.812 22-5.812V59h10v-4H52z"
      data-name="opacity"></path>
      <path d="M52 36.997h10v22.002H52zm0 18.19C50 55.187 37.063 61 30 61c-4.24 0-7.949-2.17-16-6-3.82-1.82-12-6.613-12-10 0-4 10.893 1.063 20.051 4"
      stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="#2e4369"
      fill="none" data-name="stroke"></path>
      <circle stroke-width="2" stroke-linejoin="round" stroke-linecap="round"
      stroke="#2e4369" fill="none" r="8" cy="11.001" cx="34.055" data-name="stroke"></circle>
      <circle stroke-width="2" stroke-linejoin="round" stroke-linecap="round"
      stroke="#2e4369" fill="none" r="8" cy="29.001" cx="20.008" data-name="stroke"></circle>
      <path stroke-width="2" stroke-linejoin="round" stroke-linecap="round"
      stroke="#2e4369" fill="none" d="M36.051 53h-10a4 4 0 0 1-4-4 4 4 0 0 1 4-4h4c11.949 0 7.914-6 21.914-6"
      data-name="stroke"></path>
    </Svg>
  );
};

export default Icon;
