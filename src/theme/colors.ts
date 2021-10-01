import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#ffa500",
  primaryBright: "#484848",
  primaryDark: "#aa8929",
  secondary: "#ffa500",
  success: "orange",
  warning: "#FFB237",

 
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  // background: "#FFFFF0",
  // backgroundDisabled: "#E9EAEB",
  // contrast: "#191326",
  // invertedContrast: "#FFFFFF",
  // input: "#eeeaf4",
  // tertiary: "#FFE5B4",
  // text: "#ffffff",
  // textDisabled: "#BDC2C4",
  // textSubtle: "#ffffff",
  // borderColor: "#F0F0F0",
  // card: "linear-gradient(to right, #403b4a, #e7e9bb)",
  // gradients: {
  //   bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  // },

  background: "#FFFFFF",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#FFE5B4",
  text: "#000000",
  textDisabled: "#BDC2C4",
  textSubtle: "#000000",
  borderColor: "#F0F0F0",
  card: "#F5F5F5",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

// background: #9F6C0E;
// background: -webkit-linear-gradient(left, #9F6C0E, #646464);
// background: -moz-linear-gradient(left, #9F6C0E, #646464);
// background: ;

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#ffa500",
  borderColor: "#524B63",
  card: "#000000",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
