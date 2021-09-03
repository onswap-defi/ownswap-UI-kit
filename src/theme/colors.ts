import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#ffa500",
  primaryBright: "linear-gradient(to right, #ff416c, #ff4b2b)",
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
  background: "#F0F0F0",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#FFE5B4",
  text: "#FFFFFF",
  textDisabled: "#BDC2C4",
  textSubtle: "#ffa500",
  borderColor: "#F0F0F0",
  card: "#000",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

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
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#585858",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
