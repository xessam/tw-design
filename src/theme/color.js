export const mainPallete = {
  white: "#ffffff",
  black: "#000000",
  red: "#ff2631",
  blue: "#268fff ",
};

export const backgroundSystem = {
  primary: {
    light: "#c2c2c2",
    dark: mainPallete.black,
  },
  secondary: {
    light: "#dadada",
    dark: "#1c1c1e",
  },
  tertiary: "#2c2c2e",
  quarternary: "#3a3a3c",
};

export const grayScale = {
  grey100: "#e5e5e5", // extremely light
  grey200: "#cccccc", // very light
  grey300: "#b3b3b3", // light
  grey400: "#999999", // light middle
  grey500: "#808080", // middle
  grey600: "#666666", // dark middle
  grey700: "#4d4d4d", // dark
  grey800: "#333333", // very dark
  grey900: "#1a1a1a", // extremely dark
};

export const redScale = {
  red100: "#e5222c", // extremely light
  red200: "#d02028", // very light
  red300: "#b31b22", // light
  red400: "#99171d", // light middle
  red500: "#801319", // middle
  red600: "#660f14", // dark middle
  red700: "#4d0b0f", // dark
  red800: "#33080a", // very dark
  red900: "#1a0405", // extremely dark
};

export const color = {
  ...mainPallete,
  ...backgroundSystem,
  ...grayScale,
  ...redScale,
};
